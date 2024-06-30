import React, { useState, useEffect, useRef } from "react";
import './chat-bot-page-styles.css';
import { sendMessageToGemini } from '../geminiapi'; 
import Markdown from 'react-markdown';
import { IoSend } from "react-icons/io5";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ChatBotPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("chatMessages")) || []
  );

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    try {
      const response = await sendMessageToGemini(input);
      setMessages([
        ...messages,
        { type: "user", content: input },
        { type: "bot", content: response }
      ]);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="App">
      <div className="chat-wrapper">
        {messages.length !== 0? (
            <div className="chat">
                {messages.map((message, index) => (
                 <Markdown key={index} className={`${message.type}-message`}>
                      {message.content}
                </Markdown>
                ))}
            </div>
        ): (
            <div className="empty-chat">
                <img className="empty-chat-logo" src="./makers-logo-black.png" alt="" />
                <p>Ask me something about Makers Tech's inventory</p>
            </div>
        ) }
        <div className="input-container">
            <Box             
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <TextField 
                    size="medium"
                    sx={{width: '90%'}} 
                    fullwidth 
                    label="Chat with Makers" 
                    variant="outlined"
                    id="fullWidth"
                    value={input} 
                    onChange={e => setInput(e.target.value)} />
                    
                <button onClick={handleSend} style={{width: '3.5rem', justifyContent: 'center'}} > <ArrowUpwardIcon /></button>
            </Box>
          
        </div>
      </div>
    </div>
  );
}

export default ChatBotPage;
