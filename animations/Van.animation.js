import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../public/lottie/main van.json'

function VanAnimation () {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return <Lottie options={defaultOptions} height={'75%'} width={'75%'} />
}

export default VanAnimation
