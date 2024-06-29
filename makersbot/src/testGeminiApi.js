const fs = require('fs');
const { sendMessageToGemini } = require('./geminiapi');

async function testGeminiAPI() {
    const message = "How many computers are currently available?";

    try {
        const productsData = JSON.parse(fs.readFileSync('products.json', 'utf-8'));
        const products = productsData.products;

        let context = "Product inventory information:\n";

        products.forEach(product => {
            context += `Category: ${product.category}, Brand: ${product.brand}, Quantity: ${product.quantity}, Features: ${product.features}, Price: $${product.price}\n`;
        });

        const response = await sendMessageToGemini(message, context);
        console.log("Respuesta de Gemini:", response);
    } catch (error) {
        console.error("Error al enviar mensaje a Gemini:", error);
    }
}

testGeminiAPI();

