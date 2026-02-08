import {Component} from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import HomeVideos from '../HomeVideos'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  App,
  Main,
  Banner,
  CloseIcon,
  BannerText,
  BannerButton,
} from './styledComponents'

class Home extends Component {
  state = {
    showBanner: true,
  }

  handleCloseBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <App>
                <NavBar />
                <Main
                  data-testid="home"
                  bgColor={isDarkTheme ? '#181818' : '#f9f9f9'}
                >
                  {showBanner && (
                    <Banner data-testid="banner">
                      <button
                        type="button"
                        data-testid="close"
                        onClick={this.handleCloseBanner}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                        }}
                      >
                        <CloseIcon />
                      </button>

                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        width="140"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>

                      <BannerButton type="button" data-testid="getItNowButton">
                        GET IT NOW
                      </BannerButton>
                    </Banner>
                  )}

                  <HomeVideos />
                </Main>
              </App>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
