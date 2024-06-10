import React from 'react'

import "./Phone.css"
import NotificationBar from './NotificationBar'
import Chat from '../Chat/Chat'
function Phone() {
  return (
    <div className='phone'>
      <NotificationBar></NotificationBar>
      <Chat></Chat>
      <div style={{height: "200px", width: "100%", backgroundColor: "green"}}></div>
      <div style={{height: "200px", width: "100%", backgroundColor: "orange"}}></div>
    </div>
  )
}

export default Phone