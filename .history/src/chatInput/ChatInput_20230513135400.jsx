import React from 'react'

const ChatInput = () => {
  return (
  <>
  <div class="chat-input-container">
  <input type="text" class="chat-input" placeholder="Type a message">
  <div class="icon-container">
    <i class="fas fa-paperclip"></i> <!-- Attachment icon -->
    <i class="fas fa-paper-plane"></i> <!-- Send icon -->
  </div>
</div>

  </>
  )
}

export default ChatInput