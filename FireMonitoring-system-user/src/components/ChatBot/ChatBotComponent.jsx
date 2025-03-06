import { useEffect, useRef, useState } from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css' // Import default styles
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import Config from './Config'

function ChatBotComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
  }

  const handleOutSideClick = (event) => {
    if (ref.current && !ref.current.contains(event?.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutSideClick, true)
    return () => {
      document.removeEventListener('click', handleOutSideClick, true)
    }
  }, [])

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChatbot}
        className='fixed bottom-5 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition'
      >
        {/* <ChatIcon /> */}
        chat
      </button>
      {/* Chatbot */}
      {isOpen && (
        <div
          ref={ref}
          className='fixed bottom-24 right-5  z-40 rounded-lg shadow-lg bg-white overflow-hidden'
        >
          <Chatbot
            config={Config()}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            placeholderText='Write your message'
          />
        </div>
      )}
    </>
  )
}

export default ChatBotComponent
