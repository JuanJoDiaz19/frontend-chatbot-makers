import { useEffect, useState } from "react";
import './chat-bot-page-styles.css';
import {run} from '../geminiapi'; 

function ChatBotPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_GEMINI_API_KEY)
  }, [])

  const handleSend = () => {
    run("hello");
  }
  
  
  return (
    <div className="App">
      <div className="chat-wrapper">
        <div className="chat">
          <div className="user-message">this is a user message</div>
          <div className="bot-message">this is a both message</div>
          
          <div className="user-message">this is a user message</div>
          <div className="bot-message">this is a both message</div>

          <div className="user-message">this is a user message</div>
          <div className="bot-message">this is a both message</div>

          <div className="user-message">this is a user message</div>
          <div className="bot-message">this is a both message</div>

          <div className="user-message">this is a user message</div>
          <div className="bot-message">this is a both message</div>

          <div className="user-message">this is a user message</div>
          <div className="bot-message">this is a both message</div>

          <div className="user-message">this is a user message</div>
          <div className="bot-message">this is a both message</div>

          <div className="user-message">this is a user message</div>
          <div className="bot-message">this is a both message</div>
        </div>

          <div className="input-container">
            <input 
              type="text" 
              value={input} 
              onChange={e => setInput(e.target.value)} 
            />
          </div>
          <button onClick={handleSend}>Send</button>
        </div>   
    </div>
  );
}

export default ChatBotPage;
