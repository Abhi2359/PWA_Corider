import React from 'react'
import {GrAttachment}  from "react-icons"
const ChatInput = () => {
  return (
  <>
  <div class="chat-input-container">
  <input type="text" class="chat-input" placeholder="Type a message"/>
  <div class="icon-container">
   <div className="attachment"></div>
  </div>
</div>

  </>
  )
}

export default ChatInput