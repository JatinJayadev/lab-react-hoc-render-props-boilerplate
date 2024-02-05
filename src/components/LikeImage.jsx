import React, { useState } from 'react'
import WrappedComponent from '../WrappedComponent';


const LikeImage = (props) => {

  return (

    <div>

      <button onClick={props.handleClick}>Like Image {props.state}</button>

    </div>

  )

}

let componentCall = WrappedComponent(LikeImage)

export default componentCall