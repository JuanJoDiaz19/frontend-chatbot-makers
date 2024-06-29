require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyBJKci2o_V81-lHcYFcmDIUtFCAX37p3_8";

const genAI = new GoogleGenerativeAI(apiKey);

console.log("Generative AI initialized:", genAI);

async function sendMessageToGemini(message) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
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
