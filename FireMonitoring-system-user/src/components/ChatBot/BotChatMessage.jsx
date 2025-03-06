import React from 'react'

const BotChatMessage = ({ message }) => {
  return (
    <div className='flex items-center mb-2 w-full text-left ml-1'>
      <div className='w-full p-3 rounded-lg shadow-md bg-white flex flex-col'>
        <p className='text-sm text-gray-800'>{message}</p>
      </div>
    </div>
  )
}

export default BotChatMessage
