const fs = require('fs');
require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyBJKci2o_V81-lHcYFcmDIUtFCAX37p3_8";

const genAI = new GoogleGenerativeAI(apiKey);

async function sendMessageToGemini(userQuestion) {
    try {
        const products = [
            { category: 'Laptops', brand: 'ExampleBrand', quantity: 10, features: 'Example features', price: 999 },
            { category: 'Smartphones', brand: 'AnotherBrand', quantity: 5, features: 'Another features', price: 599 }
        ];

        let contextString = `User question: ${userQuestion}\nProduct inventory information:\n`;
        products.forEach(product => {
            contextString += `- Category: ${product.category}, Brand: ${product.brand}, Quantity: ${product.quantity}, Features: ${product.features}, Price: ${product.price}\n`;
        });

        console.log("Contexto:", contextString); 

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const resultPromise = model.generateContent({ prompt: contextString });
        const result = await resultPromise;

        return result.response.text();
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        throw error;
    }
}

sendMessageToGemini("How many laptops are there?")
    .then(response => {
        console.log("Respuesta de Gemini:", response);
    })
    .catch(error => {
        console.error("Error al enviar mensaje a Gemini:", error);
    });



/*async function testQuestion() {
    const message = "How many laptops are there?";
    const response = await sendMessageToGemini(message);
    console.log("Response from Gemini:", response);
}

*/

