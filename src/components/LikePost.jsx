import React, { useState } from 'react'
import WrappedComponent from '../WrappedComponent';

const LikePost = (props) => {

  return (

    <div>

      <button onClick={props.handleClick}>Like Post {props.state}</button>

    </div>

  )
}

let componentCall = WrappedComponent(LikePost)

export default componentCall