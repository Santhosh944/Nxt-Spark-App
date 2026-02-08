import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavigationLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactNote,
  ContactImage,
  NavigationSmallContainer,
  NavBar,
} from './styledComponents'

class NavigationBar extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#181818' : '#ffffff'
        const borderColor = isDarkTheme ? '#303030' : '#e5e7eb'

        const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const mutedText = isDarkTheme ? '#cbd5e1' : '#475569'

        const activeBg = isDarkTheme ? '#383838' : '#f1f5f9'
        const activeColor = '#ff0b37'
        const inactiveColor = '#909090'

        const onClickTabHome = () => changeTab('Home')
        const onClickTabTrending = () => changeTab('Trending')
        const onClickTabGaming = () => changeTab('Gaming')
        const onClickTabSaved = () => changeTab('Saved')

        return (
          <NavBar>
            <NavigationLgContainer bgColor={bgColor} borderColor={borderColor}>
              <NavOptions>
                <NavLink to='/'>
                  <NavLinkContainer
                    bgColor={activeTab === 'Home' ? activeBg : 'transparent'}
                    hoverBg={activeBg}
                    onClick={onClickTabHome}
                  >
                    <AiFillHome
                      size={26}
                      color={activeTab === 'Home' ? activeColor : inactiveColor}
                    />
                    <NavText color={textColor}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to='/trending'>
                  <NavLinkContainer
                    bgColor={
                      activeTab === 'Trending' ? activeBg : 'transparent'
                    }
                    hoverBg={activeBg}
                    onClick={onClickTabTrending}
                  >
                    <HiFire
                      size={26}
                      color={
                        activeTab === 'Trending' ? activeColor : inactiveColor
                      }
                    />
                    <NavText color={textColor}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to='/gaming'>
                  <NavLinkContainer
                    bgColor={activeTab === 'Gaming' ? activeBg : 'transparent'}
                    hoverBg={activeBg}
                    onClick={onClickTabGaming}
                  >
                    <SiYoutubegaming
                      size={26}
                      color={
                        activeTab === 'Gaming' ? activeColor : inactiveColor
                      }
                    />
                    <NavText color={textColor}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to='/saved-videos'>
                  <NavLinkContainer
                    bgColor={activeTab === 'Saved' ? activeBg : 'transparent'}
                    hoverBg={activeBg}
                    onClick={onClickTabSaved}
                  >
                    <CgPlayListAdd
                      size={26}
                      color={
                        activeTab === 'Saved' ? activeColor : inactiveColor
                      }
                    />
                    <NavText color={textColor}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavOptions>

              <ContactInfo borderColor={borderColor}>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src='https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
                    alt='facebook logo'
                  />
                  <ContactImage
                    src='https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'
                    alt='twitter logo'
                  />
                  <ContactImage
                    src='https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'
                    alt='linked in logo'
                  />
                </ContactIcons>
                <ContactNote color={mutedText}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactInfo>
            </NavigationLgContainer>

            <NavigationSmallContainer
              bgColor={bgColor}
              borderColor={borderColor}
            >
              <NavLink to='/'>
                <AiFillHome
                  size={28}
                  onClick={onClickTabHome}
                  color={activeTab === 'Home' ? activeColor : inactiveColor}
                />
              </NavLink>

              <NavLink to='/trending'>
                <HiFire
                  size={28}
                  onClick={onClickTabTrending}
                  color={activeTab === 'Trending' ? activeColor : inactiveColor}
                />
              </NavLink>

              <NavLink to='/gaming'>
                <SiYoutubegaming
                  size={28}
                  onClick={onClickTabGaming}
                  color={activeTab === 'Gaming' ? activeColor : inactiveColor}
                />
              </NavLink>

              <NavLink to='/saved-videos'>
                <CgPlayListAdd
                  size={28}
                  onClick={onClickTabSaved}
                  color={activeTab === 'Saved' ? activeColor : inactiveColor}
                />
              </NavLink>
            </NavigationSmallContainer>
          </NavBar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return this.renderTabItems()
  }
}

export default NavigationBar
