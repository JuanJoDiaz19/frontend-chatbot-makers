import { apiBackend } from "./BackendApi"

// export const retrieveHelloWorldBean = () => apiBackend.get('/hello-world-bean')

export const retrieveAllCategoriesWithProducts = () => apiBackend.get(`categories`);

// export const executeBasicAuthenticationService = (token) => apiBackend.get(`/basic-auth`, {
//     headers: {
//         Authorization: token
//     }
// })

