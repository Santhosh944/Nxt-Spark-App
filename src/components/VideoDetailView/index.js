import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavBar from '../NavBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import PlayVideoView from '../PlayVideoView'
import {VideoDetailViewContainer, LoaderContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailView extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickLiked = () => {
    this.setState({isLiked: true, isDisLiked: false})
  }

  clickDisLiked = () => {
    this.setState({isDisLiked: true, isLiked: false})
  }

  clickSaved = addVideo => {
    const {videoDetails} = this.state
    this.setState(prev => ({isSaved: !prev.isSaved}))
    addVideo(videoDetails)
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  )

  renderPlayVideoView = addVideo => {
    const {videoDetails, isLiked, isDisLiked, isSaved} = this.state

    // compute exact colors for Like/Dislike buttons
    const likeColor = isLiked ? '#2563eb' : '#64748b'
    const dislikeColor = isDisLiked ? '#2563eb' : '#64748b'

    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
        clickSaved={() => this.clickSaved(addVideo)}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
        isSaved={isSaved}
        likeColor={likeColor}
        dislikeColor={dislikeColor}
      />
    )
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideoDetailView = addVideo => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPlayVideoView(addVideo)
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, addVideo} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <>
              <Header />
              <NavBar />
              <VideoDetailViewContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderVideoDetailView(addVideo)}
              </VideoDetailViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoDetailView
