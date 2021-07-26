import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../public/lottie/story.json'

function StoryAnimation () {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return <Lottie options={defaultOptions} height={'90%'} width={'100%'} />
}

export default StoryAnimation
