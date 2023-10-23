import React from 'react'
import "./buttonstyle.css"

export const Button = (props) => {
  return (
    <button type='button' className='btn'><span className='win'></span>{props.name}</button>
  )}
