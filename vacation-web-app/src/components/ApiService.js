import axios from "axios";

export default class ApiService {
    static BASE_URL = "http://localhost:4040";

    // Helper function to get authorization header
    static getHeader() {
        const token = localStorage.getItem("token");
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };
    }

    /** AUTH */

    // Register a new user
    static async registerUser(registration) {
        const response = await axios.post(`${this.BASE_URL}/auth/register`, registration);
        return response.data;
    }

    // Login a registered user
    static async loginUser(loginDetails) {
        const response = await axios.post(`${this.BASE_URL}/auth/login`, loginDetails);
        return response.data;
    }

    /** USERS */

    // Get all users
    static async getAllUsers() {
        const response = await axios.get(`${this.BASE_URL}/users/all`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    // Get logged-in user's profile information
    static async getUserProfile() {
        const response = await axios.get(`${this.BASE_URL}/users/get-logged-in-profile-info`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    // Get a single user by ID
    static async getUser(userId) {
        const response = await axios.get(`${this.BASE_URL}/users/get-by-id/${userId}`, {
            headers: this.getHeader(),
        });
        return response.data;
    }

    // Delete a user by ID
    static async deleteUser(userId) {
        const response = await axios.delete(`${this.BASE_URL}/users/delete/${userId}`, {
            headers: this.getHeader(),
        });
        return response.data;
    }









    /** AUTHENTICATION CHECKER */

    // Logout user by clearing token and role from local storage
    static logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
    }

    // Check if user is authenticated
    static isAuthenticated() {
        const token = localStorage.getItem("token");
        return !!token;
    }

    // Check if logged-in user has ADMIN role
    static isAdmin() {
        const role = localStorage.getItem("role");
        return role === "ADMIN";
    }

    // Check if logged-in user has USER role
    static isUser() {
        const role = localStorage.getItem("role");
        return role === "USER";
    }



}