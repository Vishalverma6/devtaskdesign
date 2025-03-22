const BASE_URL = import.meta.env.VITE_BASE_URL

// Auth Endpoints 
export const authEndpoints ={
    SIGNUP_API :BASE_URL + "/auth/signup",
    LOGIN_API :BASE_URL + "/auth/login",
}