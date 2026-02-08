import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import TrendingVidoes from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import VideoDetailView from './components/VideoDetailView'
import NotFound from './components/NotFound'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import './App.css'
import './index.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
    savedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
  }

  toggleTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  toggleSaveVideo = video => {
    this.setState(prev => {
      const exists = prev.savedVideos.some(v => v.id === video.id)
      return {
        savedVideos: exists
          ? prev.savedVideos.filter(v => v.id !== video.id)
          : [...prev.savedVideos, video],
      }
    })
  }

  addVideoReaction = (video, reaction) => {
    if (reaction === 'LIKE') {
      this.setState({
        likedVideos: [video],
        dislikedVideos: [],
      })
    }

    if (reaction === 'DISLIKE') {
      this.setState({
        dislikedVideos: [video],
        likedVideos: [],
      })
    }
  }

  addVideo = video => {
    this.setState(prev => {
      const exists = prev.savedVideos.some(v => v.id === video.id)
      return {
        savedVideos: exists
          ? prev.savedVideos.filter(v => v.id !== video.id)
          : [...prev.savedVideos, video],
      }
    })
  }

  isVideoLiked = video => {
    const {likedVideos} = this.state
    return likedVideos.some(v => v.id === video.id)
  }

  isVideoDisliked = video => {
    const {dislikedVideos} = this.state
    return dislikedVideos.some(v => v.id === video.id)
  }

  isVideoSaved = video => {
    const {savedVideos} = this.state
    return savedVideos.some(v => v.id === video.id)
  }

  changeTab = activeTab => {
    this.setState({activeTab})
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state

    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,

          activeTab,
          changeTab: this.changeTab,

          savedVideos,
          addVideo: this.addVideo,

          addVideoReaction: this.addVideoReaction,
          isVideoLiked: this.isVideoLiked,
          isVideoDisliked: this.isVideoDisliked,
          isVideoSaved: this.isVideoSaved,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVidoes} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
