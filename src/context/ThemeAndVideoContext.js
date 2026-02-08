import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},

  activeTab: 'Home',
  changeTab: () => {},

  savedVideos: [],
  addVideo: () => {},

  addVideoReaction: () => {},
  isVideoLiked: () => false,
  isVideoDisliked: () => false,
  isVideoSaved: () => false,
})

export default ThemeAndVideoContext
