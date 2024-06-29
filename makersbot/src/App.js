import { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    console.log("sent");
  }
  
  
  return (
    <div className="App">
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
  );
}

export default App;
