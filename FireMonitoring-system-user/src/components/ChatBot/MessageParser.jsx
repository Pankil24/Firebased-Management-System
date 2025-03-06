// in MessageParser.js
import React from 'react'

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    message = message?.toLowerCase()
    if (message.includes('hello')) {
      actions.handleHello()
    }
    if (message.includes('dog')) {
      actions.handleDog()
    }
    if (message?.includes('help')) {
      actions.handleSelect()
    }
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions
        })
      })}
    </div>
  )
}

export default MessageParser
