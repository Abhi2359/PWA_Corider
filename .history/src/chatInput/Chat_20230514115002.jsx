import React from 'react'
import styles from "./Chat.css"
const Chat = ({message,image}) => {
  return (
  <>
  <div className="user_chat">
    <div className="user_img " style={{backgroundImage:{image}}></div>
    <div className="chat_content">
    
    <div className="user_message"><p>{message}</p></div>
    </div>
  </div>
  </>
  )
}

export default Chat