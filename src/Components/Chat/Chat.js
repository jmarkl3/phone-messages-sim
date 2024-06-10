import React from 'react'
import "./Chat.css"
import ChatTopBar from './ChatTopBar'
import MessageContainer from './Messages/MessageContainer'
import MessageInput from './MessageInput'

function Chat() {

  let userID = "user1"

  let exampleChat = [
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12",
      type: "image"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12",
      type: "image"
    },
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user1",
      content: "Hey",
      dtetime: "2024-6-8 12:12:12"
    },
    {
      from: "user2",
      content: "Hey, whats up?",
      dtetime: "2024-6-8 12:12:12"
    },
  ]

  return (
    <div className='chat'>
      <ChatTopBar name={"RIchie House"}></ChatTopBar>
      <div className='chatMessageArea'>
        <div className='chatMessageScrollArea'>
          {exampleChat.map(messageData => (
            <MessageContainer content={messageData.content} sent={messageData.from === userID}></MessageContainer>

          ))}
        </div>
      </div>
      <MessageInput></MessageInput>
    </div>
  )
}

export default Chat