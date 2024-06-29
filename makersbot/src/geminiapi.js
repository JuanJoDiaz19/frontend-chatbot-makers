const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run(messageToApi) {

    const result = await model.generateContent(messageToApi);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}
  
run();