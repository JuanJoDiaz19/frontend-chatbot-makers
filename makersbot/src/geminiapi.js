import { retrieveAllCategoriesWithProducts } from "./api/ProductsApiService";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyBJKci2o_V81-lHcYFcmDIUtFCAX37p3_8";

const genAI = new GoogleGenerativeAI(apiKey);

export async function sendMessageToGemini(userQuestion) {
    try {

        let inventory = []; // Correct declaration

        await retrieveAllCategoriesWithProducts()
        .then(response => {
            inventory = response.data; // Assigning response to inventory
            console.log('Inventory:', inventory); // Log the inventory if needed
        })
        .catch(error => console.error('Error retrieving inventory:', error)); // Proper error handling


        let contextString = `User question: ${userQuestion}\nProduct inventory information:\n`;

        inventory.forEach(category => {
            contextString += `- Category: ${category.name} Products: \n`;
            category.products.forEach(product => {
                contextString += `* product name: ${product.name} quantity: ${product.quantity}, characteristics: ${product.characteristics}, price: ${product.price}, score: ${product.score}, \n`;
            });
        });
       

        console.log("Contexto:", contextString); 

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const resultPromise = model.generateContent(contextString);
        const result = await resultPromise;

        //let response = result.response.text()
        //console.log(marked(response))

        return result.response.text();

    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        throw error;
    }
}