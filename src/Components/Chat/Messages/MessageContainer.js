import React from 'react'
import "./Messages.css"

function MessageContainer({content, userData, sent}) {
  return (
    // <div></div>
    <div className={'messageContainer '+(sent ? "messageContainerSent":"")}>
        {/* {!sent && 
            <div className='nameCircle'>SP</div>
        } */}
        <div className={'message '+(sent?"messageSent":"messageRecieved")}>
            {content}
        </div>
    </div>
  )
}

export default MessageContainer