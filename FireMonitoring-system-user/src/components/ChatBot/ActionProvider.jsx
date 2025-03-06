// in ActionProvider.jsx
import React from 'react'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. How can i help you.')

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }))
  }

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture'
      }
    )

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }))
  }

  const handleSelect = () => {
    const botMessage = createChatBotMessage('How can i help you', {
      widget: 'help'
    })
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }))
  }

  const sendSOSMessage = () => {
    const botMessage = createChatBotMessage(
      'Thank you,For sharing your location fire brigade will reach you in short time.'
    )

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }))
  }

  const sendNegativeSOSMessage = () => {
    const botMessage = createChatBotMessage(
      'Please share your location!!s'
    )

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }))
  }

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleSelect,
            sendSOSMessage,
            sendNegativeSOSMessage
          }
        })
      })}
    </div>
  )
}

export default ActionProvider
