import React, { useEffect, useState } from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import axiosHandler from '../../lib/axiosInterceptor'

const botName = 'MERN'

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message)
      })
  }, [])

  return (
    <div className='flex justify-center'>
      <img src={imageUrl} alt='A dog' className='rounded-lg shadow-md' />
    </div>
  )
}

const HelpOptions = ({ actions }) => {
  return (
    <div className='flex space-x-2'>
      <button
        onClick={() => {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
              async (position) => {
                console.log('Action ==>', actions)
                console.log('Log ==>', {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                })

                const createNotification = {
                  title: 'Need Fire emergency',
                  description: 'Need fire brigade emergency reach ASAP',
                  isRead: false,
                  path: `/google-maps#lat=${position.coords.latitude}&lag=${position.coords.longitude}`
                }

                const response = await axiosHandler.post(
                  '/notifications',
                  createNotification
                )
                actions?.sendSOSMessage()

                console.log('Response ==>', response)
                // setLocation({
                //   lat: position.coords.latitude,
                //   lng: position.coords.longitude
                // })
              },
              (error) => {
                actions?.sendNegativeSOSMessage()
                console.error('Error getting location:', error)
                // setIsError(true)
              }
            )
          } else {
            actions?.sendNegativeSOSMessage()
            // setIsError(true)
          }
        }}
        className='px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition'
      >
        Track Me
      </button>
      {/* <button
        onClick={() => actions?.handleHello()}
        className='px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'
      >
        Button
      </button> */}
    </div>
  )
}

const Config = () => {
  const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
    botName: botName,
    customStyles: {
      botMessageBox: {
        backgroundColor: 'white'
      },
      chatButton: {
        backgroundColor: 'red'
      }
    },
    widgets: [
      {
        widgetName: 'dogPicture',
        widgetFunc: (props) => <DogPicture {...props} />
      },
      {
        widgetName: 'help',
        widgetFunc: (props) => <HelpOptions {...props} />
      }
    ],
    customComponents: {
      header: () => (
        <div className='bg-red-500 text-white py-3 px-4 text-lg font-semibold shadow-md'>
          Welcome to MERN-Bot
        </div>
      ),
      botChatMessage: ({ message }) => <BotChatMessage message={message} />,
      userAvatar: () => (
        <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
      ),
      botAvatar: () => (
        <div className='w-10 h-10 bg-gray-800 rounded-full'></div>
      )
    }
  }
  return { ...config }
}

const BotChatMessage = ({ message }) => {
  return (
    <div className='flex items-center mb-2 w-full text-left ml-1'>
      <div className='w-full p-3 rounded-lg shadow-md bg-white flex flex-col'>
        <p className='text-sm text-gray-800'>{message}</p>
      </div>
    </div>
  )
}

export default Config
