import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
      <button onClick={props.handleClick}> Click me </button>
    </div>
  )
}
// that how we can pass fumnction through props to parents to children 
// parent me function banaye handle click and pass kar diye children me 
export default Button
