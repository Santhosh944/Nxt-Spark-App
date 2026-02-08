import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'

export const App = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: Roboto, sans-serif;
`

export const Main = styled.main`
  flex: 1;
  background-color: ${props => props.bgColor};
  position: relative;
  z-index: 1;
  margin-left: 260px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const Banner = styled.section`
  position: relative;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  background-position: center;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CloseIcon = styled(AiOutlineClose)`
  cursor: pointer;
  color: #64748b; /* gray */
  font-size: 20px;

  &:hover {
    color: #1e293b;
  }
`

export const BannerText = styled.p`
  font-size: 20px;
  width: 40%;
  margin: 16px 0;

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const BannerButton = styled.button`
  padding: 10px 24px;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid #000000;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 16px;
  transition: background-color 0.3s, transform 0.2s;

  @media (max-width: 576px) {
    font-size: 13px;
    padding: 12px;
  }
`
