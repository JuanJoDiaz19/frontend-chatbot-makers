import React, { useState } from "react";
import './chat-bot-page-styles.css';
import { sendMessageToGemini } from '../geminiapi'; 

function ChatBotPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    try {
      const response = await sendMessageToGemini(input); 
      setMessages([
        ...messages,
        { type: "user", content: input }, 
        { type: "bot", content: response } 
      ]);
      setInput(""); // Limpiar el campo de entrada después de enviar el mensaje
    } catch (error) {
      console.error("Error sending message:", error);
      // Puedes manejar el error de otra manera, por ejemplo, mostrando un mensaje al usuario
    }
  };

  return (
    <div className="App">
      <div className="chat-wrapper">
        <div className="chat">
          {messages.map((message, index) => (
            <div key={index} className={`${message.type}-message`}>
              {message.content}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input 
            type="text" 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBotPage;
