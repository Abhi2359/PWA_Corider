import React from 'react'
import styles from "./Chat.css"
const Chat = ({message,image}) => {
  return (
  <>
  <div className="user_chat">
    <div className="user_img"><img src="https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o" alt="" /> </div>
    <div className="chat_content">
    
    <div className="user_message"><p>{message}</p></div>
    </div>
  </div>
  </>
  )
}

export default Chat