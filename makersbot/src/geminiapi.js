const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export async function run(messageToApi) {

    console.log(process.env.REACT_APP_GEMINI_API_KEY);

    const result = await model.generateContent('messageToApi');
    const response = await result.response;
    const text = response.text();
    console.log(text);
}
  
run();