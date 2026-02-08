import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'

import HomeVideoCard from '../HomeVideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'

import {
  ContextSpace,
  SearchBox,
  SearchInput,
  SearchButton,
  LoaderContainer,
  LowerBar,
  VideoGrid,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeVideos extends Component {
  state = {
    videos: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        videos: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearch = event => {
    event.preventDefault()
    this.getVideos()
  }

  renderVideos = () => {
    const {videos} = this.state

    if (videos.length === 0) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <h1>No Search results found</h1>
          <p>Try different key words or remove search filter</p>
          <button type="button" onClick={this.getVideos}>
            Retry
          </button>
        </div>
      )
    }

    return (
      <VideoGrid data-testid="videosList">
        {videos.map(video => (
          <li key={video.id}>
            <HomeVideoCard videoDetails={video} />
          </li>
        ))}
      </VideoGrid>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </LoaderContainer>
  )

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideos()
      case apiStatusConstants.failure:
        return <FailureView onRetry={this.getVideos} />
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#ffffff'

          return (
            <ContextSpace bgColor={bgColor}>
              <SearchBox as="form" onSubmit={this.onSearch}>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearch}
                />
                <SearchButton
                  type="button"
                  data-testid="searchButton"
                  onClick={this.onSearch}
                >
                  <AiOutlineSearch size={20} data-testid="searchButton" />
                </SearchButton>
              </SearchBox>

              <LowerBar>{this.renderContent()}</LowerBar>
            </ContextSpace>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default HomeVideos
