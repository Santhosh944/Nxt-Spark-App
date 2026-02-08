import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  LoginBackground,
  LoginContainer,
  LoginContainerElement,
  LoginImage,
  Container,
  InputContainer,
  LoginUsername,
  LoginInput,
  CheckboxContainer,
  ShowPasswordText,
  Checkbox,
  LoginButton,
  CautionText,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangeUserPassword = event => {
    this.setState({password: event.target.value})
  }

  OnShowPassword = () => {
    this.setState(prevState => ({
      isShowPassword: !prevState.isShowPassword,
    }))
  }

  renderUserName = fontColor => {
    const {username} = this.state
    return (
      <InputContainer>
        <LoginUsername htmlFor='username' color={fontColor}>
          USERNAME (rahul)
        </LoginUsername>
        <LoginInput
          type='text'
          id='username'
          value={username}
          placeholder='Username'
          onChange={this.onChangeUserName}
          color={fontColor}
        />
      </InputContainer>
    )
  }

  renderUserPassword = (fontColor, showPassCol) => {
    const {password, isShowPassword} = this.state
    const inputType = isShowPassword ? 'text' : 'password'

    return (
      <>
        <InputContainer>
          <LoginUsername htmlFor='password' color={fontColor}>
            PASSWORD (rahul@2021)
          </LoginUsername>
          <LoginInput
            type={inputType}
            id='password'
            value={password}
            placeholder='Password'
            onChange={this.onChangeUserPassword}
            color={fontColor}
          />
        </InputContainer>

        <CheckboxContainer>
          <Checkbox
            type='checkbox'
            id='showPassword'
            onChange={this.OnShowPassword}
          />
          <ShowPasswordText
            as='label'
            htmlFor='showPassword'
            color={showPassCol}
          >
            Show Password
          </ShowPasswordText>
        </CheckboxContainer>
      </>
    )
  }

  showSuccessMsg = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  showFailureMsg = error => {
    this.setState({
      showSubmitError: true,
      errorMsg: error,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.showSuccessMsg(data.jwt_token)
    } else {
      this.showFailureMsg(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to='/' />
    }
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const backgroundColour = isDarkTheme ? '#212121' : '#ffffff'
          const backgroundColourLogin = isDarkTheme ? '#0f0f0f' : '#ffffff'
          const borderColor = isDarkTheme ? '#000000' : '#e0e0e0'
          const fontColor = isDarkTheme ? '#ffffff' : '#64748b'
          const showPassCol = isDarkTheme ? '#ffffff' : '#475569'
          const logoImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginBackground bgColor={backgroundColour}>
              <LoginContainer
                bgColor={backgroundColourLogin}
                borderColor={borderColor}
              >
                <LoginContainerElement onSubmit={this.submitForm}>
                  <LoginImage src={logoImg} alt='website logo' />
                  <Container>
                    {this.renderUserName(fontColor)}
                    {this.renderUserPassword(fontColor, showPassCol)}
                  </Container>

                  <LoginButton type='submit'>Login</LoginButton>
                  {showSubmitError && <CautionText>*{errorMsg}</CautionText>}
                </LoginContainerElement>
              </LoginContainer>
            </LoginBackground>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Login
