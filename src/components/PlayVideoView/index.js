import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike, AiOutlineSave} from 'react-icons/ai'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  ResponsivePlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'

const PlayVideoView = ({
  videoDetails,
  isLiked,
  isDisLiked,
  isSaved,
  clickLiked,
  clickDisLiked,
  clickSaved,
}) => {
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        // Exact colors for Like/Dislike/Save
        const likeColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeColor = isDisLiked ? '#2563eb' : '#64748b'
        const saveColor = isSaved ? '#2563eb' : '#64748b'

        return (
          <VideoPlayer>
            <ResponsivePlayer>
              <ReactPlayer
                url={videoDetails.videoUrl}
                controls
                width="100%"
                height="100%"
              />
            </ResponsivePlayer>

            <PlayVideoTitle color={textColor}>
              {videoDetails.title}
            </PlayVideoTitle>

            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {videoDetails.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {videoDetails.publishedAt}
              </PlayVideoStatus>

              <PlaySocialButtonsContainer>
                <SocialButton
                  type="button"
                  color={likeColor}
                  onClick={clickLiked}
                >
                  <AiOutlineLike size={22} />
                  <ButtonText>Like</ButtonText>
                </SocialButton>

                <SocialButton
                  type="button"
                  color={dislikeColor}
                  onClick={clickDisLiked}
                >
                  <AiOutlineDislike size={22} />
                  <ButtonText>Dislike</ButtonText>
                </SocialButton>

                <SocialButton
                  type="button"
                  color={saveColor}
                  onClick={clickSaved}
                >
                  <AiOutlineSave size={22} />
                  <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                </SocialButton>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>

            <HrLine />

            {/* CHANNEL INFO */}
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <ChannelSubscribers color={textColor}>
                  {videoDetails.subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription color={textColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideoView
