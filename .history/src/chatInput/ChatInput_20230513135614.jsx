import React from 'react'
import {GrAttachment}  from "react-icons/gr"
import {RiSendPlane2Line}  from "react-icons/ri"
const ChatInput = () => {
  return (
  <>
  <div class="chat-input-container">
  <input type="text" class="chat-input" placeholder="Type a message"/>
  <div class="icon-container">
   <div className="attachment"><GrAttachment/></div>
   <div className="send"><</div>
  </div>
</div>

  </>
  )
}

export default ChatInput