import {Link} from 'react-router-dom'

import {
  VideoCard,
  VideoThumbnail,
  VideoDetails,
  ProfileImageWrapper,
  ProfileImage,
  VideoDescription,
  Description,
  ChannelName,
  Stats,
} from './styledComponents'
import './index.css'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const HomeVideoCard = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const bgColor = isDarkTheme ? 'transparent' : '#ffffff'
        const borderColor = isDarkTheme ? '#303030' : '#e5e7eb'
        const textColor = isDarkTheme ? '#ffffff' : '#1e293b'
        const statsColor = isDarkTheme ? '#64748b' : '#94a3b8'

        return (
          <Link to={`/videos/${id}`} className="link">
            <VideoCard bgColor={bgColor} borderColor={borderColor}>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImageWrapper>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <Description textColor={textColor}>{title}</Description>
                </ProfileImageWrapper>

                <VideoDescription>
                  <ChannelName>{name}</ChannelName>
                  <Stats statsColor={statsColor}>
                    {viewCount} views • {publishedAt}
                  </Stats>
                </VideoDescription>
              </VideoDetails>
            </VideoCard>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
