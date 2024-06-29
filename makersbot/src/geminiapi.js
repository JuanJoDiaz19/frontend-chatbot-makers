const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.REACT_APP_GEMINI_API_KEY ;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function sendMessageToGemini(message) {
    
    console.log("Generative AI initialized:", genAI);
    
    const resultPromise = model.generateContent(message);
    
    return resultPromise
        .then(result => result.response.text())
        .catch(error => {
            console.error("Error sending message to Gemini:", error);
            throw error; 
        });
}

module.exports = {
    sendMessageToGemini
};