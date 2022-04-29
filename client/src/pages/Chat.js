import React from 'react'
import Sidebar from '../components/Sidebar'
import MessageBox from '../components/MessageBox'

function Chat() {
  return (
    <div classname="flex w-full">
      <div className="flex flex-row justify-between p-6">
        <div clasName="flex flex-col">
          <Sidebar/>
        </div>
        <div clasName="flex flex-col">
          <MessageBox/>
        </div>
        <div clasName="flex flex-col">
      </div>
      </div>
    </div>
  )
}

export default Chat