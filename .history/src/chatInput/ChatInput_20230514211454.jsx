import React from 'react'
import {GrAttachment}  from "react-icons/gr"
import {RiSendPlane2Line}  from "react-icons/ri"
import styles from "./ChatInput.css"
const ChatInput = () => {
  return (
  <>


  <div classN="chat-input-container">
  <input type="text" class="chat-input" placeholder="Type a message"/>
  <div class="icon-container">
   <div className="attachment"><GrAttachment/></div>
   <div className="send"><RiSendPlane2Line/></div>
  </div>
</div>
  

  </>
  )
}

export default ChatInput