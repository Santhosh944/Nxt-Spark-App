import styled from 'styled-components'

export const VideoCard = styled.div`

  display: flex;
  flex-direction: column;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: ${props => props.bgColor};
  border-color: ${props => props.borderColor};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 12px;
`

export const VideoDetails = styled.div`
  padding: 14px;
`

export const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const ProfileImage = styled.img`
  height: clamp(32px, 4vw, 44px);
  width: auto;
  border-radius: 50%;
`

export const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Description = styled.p`
  font-size: clamp(13px, 1.1vw, 15px);
  font-weight: 500;
  color: ${props => props.textColor};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
export const ChannelName = styled.p`
  font-size: clamp(13px, 1.1vw, 14px);
  color: #64748b;
  margin: 2px 4px 5px;
`

export const Stats = styled.p`
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 12px;
  font-size: clamp(13px, 1vw, 14px);
  color: ${props => props.statsColor};
  margin: 2px 4px 5px;
`
