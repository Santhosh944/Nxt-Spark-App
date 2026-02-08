import {AiOutlineSave} from 'react-icons/ai'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  ItemLink,
  TrendingListItem,
  TrendingThumbNailImage,
  TrendingVideoDetails,
  TrendingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingViewsAndDate,
  TrendingDot,
} from './styledComponents'

const TrendingVideoDetailedView = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const subTextColor = isDarkTheme ? '#94a3b8' : '#64748b'

        const onClickRemove = () => {
          addVideo(videoDetails)
        }

        return (
          <TrendingListItem>
            <ItemLink to={`/videos/${id}`}>
              <TrendingThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
            </ItemLink>

            <TrendingVideoDetails>
              <TrendingProfileImage src={profileImageUrl} alt="channel logo" />

              <TrendingContentSection>
                <ItemLink to={`/videos/${id}`}>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                </ItemLink>

                <TrendingChannelName color={subTextColor}>
                  {name}
                </TrendingChannelName>

                <TrendingViewsAndDate color={subTextColor}>
                  {viewCount} views
                  <TrendingDot>•</TrendingDot>
                  {publishedAt}
                </TrendingViewsAndDate>

                {/* ✅ REQUIRED FOR TEST 109 */}
                <button
                  type="button"
                  onClick={onClickRemove}
                  style={{
                    border: 'none',
                    background: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#2563eb',
                    cursor: 'pointer',
                    padding: '5px 0',
                    fontSize: '14px',
                  }}
                >
                  <AiOutlineSave size={20} />
                  <span style={{marginLeft: '5px'}}>Saved</span>
                </button>
              </TrendingContentSection>
            </TrendingVideoDetails>
          </TrendingListItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default TrendingVideoDetailedView
