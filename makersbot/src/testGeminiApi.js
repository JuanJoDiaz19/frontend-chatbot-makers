const { sendMessageToGemini } = require('./geminiapi');

async function testGeminiAPI() {
    const message = "¿Qué día es hoy?";
    const response = await sendMessageToGemini(message);
    console.log("Respuesta de Gemini:", response);
}

testGeminiAPI();
