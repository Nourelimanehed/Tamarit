import React from 'react'

const AddChatBox = ({msg,date}) => {
  return (
    <div>
        <div className="add-chat-box">
            <div className="add-chat-box-info">
                <div className="add-chat-box-name">Meriem Soltani</div> 
                <div className="add-chat-box-date">{date}</div>
            </div>
        <div>{msg}</div>
    </div>
    <hr className="add-chat-box-line"/> 
    </div>
  )
}

export default AddChatBox