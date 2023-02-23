import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import "./Chat.css"
import SendIcon from '@material-ui/icons/Send';

function Chat() {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === "") return
        setMessages([...messages, {
            message: input,
            name: "demo app",
            timestamp: "just now!",
            received: false
        }])
        setInput("")
    }

    return (

        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Facu De Lucia</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p className="chat__message chat__reciever">
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timeStamp">{message.timestamp}</span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form onSubmit={sendMessage}>
                    <input
                        value={input}
                        onChange={handleChange}

                        placeholder="Type a message"
                        type="text"
                    />
                    {/* <button  type="submit" placeholder="Send a message"></button> */}
                    <IconButton>
                        <SendIcon onClick={sendMessage} />
                    </IconButton>

                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
