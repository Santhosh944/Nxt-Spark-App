import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  HeaderBackground,
  LogoLink,
  LogoImage,
  NavProfileContainer,
  ProfileImage,
  LogoutIconButton,
  LogoutButton,
  ThemeButton,
  LogoutModal,
  LogoutText,
  LogoutButtons,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const {history} = props

      const bgColor = isDarkTheme ? '#181818' : '#ffffff'
      const iconColor = isDarkTheme ? '#ffffff' : '#000000'

      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onLogout = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderBackground bgColor={bgColor} data-testid="header">
          <LogoLink to="/">
            <LogoImage src={logoUrl} alt="website logo" />
          </LogoLink>

          <NavProfileContainer>
            <ThemeButton onClick={toggleTheme} data-testid="theme">
              {isDarkTheme ? (
                <BsBrightnessHigh size={22} color={iconColor} />
              ) : (
                <BsMoon size={22} color={iconColor} />
              )}
            </ThemeButton>

            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              overlayStyle={{background: 'rgba(0,0,0,0.35)'}}
              contentStyle={{
                border: 'none',
                padding: 0,
                background: 'transparent',
              }}
              trigger={<LogoutButton as="button">Logout</LogoutButton>}
            >
              {close => (
                <LogoutModal isDark={isDarkTheme}>
                  <LogoutText isDark={isDarkTheme}>
                    Are you sure, you want to logout
                  </LogoutText>

                  <LogoutButtons>
                    <CancelButton onClick={close}>Cancel</CancelButton>
                    <ConfirmButton onClick={onLogout}>Confirm</ConfirmButton>
                  </LogoutButtons>
                </LogoutModal>
              )}
            </Popup>

            <LogoutIconButton onClick={onLogout}>
              <FiLogOut size={22} color={iconColor} />
            </LogoutIconButton>
          </NavProfileContainer>
        </HeaderBackground>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
