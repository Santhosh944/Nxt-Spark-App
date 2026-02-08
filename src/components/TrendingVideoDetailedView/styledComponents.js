import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
- width: 100%;
`

export const TrendingListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  cursor: pointer;

  &:hover {
    opacity: 9.0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`

export const TrendingThumbNailImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 180px;
  }
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 100%;
  }
`

export const TrendingProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    display: none; /* hide profile for large screens */
  }
`

export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TrendingTitle = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 6px 0;
  color: ${props => props.color};

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const TrendingChannelName = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => props.color};
  margin: 0 0 4px 0;
`

export const TrendingViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
  margin: 0;
  display: flex;
  align-items: center;
`

export const TrendingDot = styled.span`
  margin: 0 6px;
  font-weight: bold;
  color: ${props => props.color || '#64748b'};
`
