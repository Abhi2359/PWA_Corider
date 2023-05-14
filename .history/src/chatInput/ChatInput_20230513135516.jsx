import React from 'react'
import {GrAttachment}  from "react-icons/gr"
const ChatInput = () => {
  return (
  <>
  <div class="chat-input-container">
  <input type="text" class="chat-input" placeholder="Type a message"/>
  <div class="icon-container">
   <div className="attachment"><GrAttachment/></div>
   
  </div>
</div>

  </>
  )
}

export default ChatInput