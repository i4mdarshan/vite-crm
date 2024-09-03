
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useAuth } from "@/hooks/useAuth";
//import { setupCache } from "axios-cache-adapter";

// Create a cache adapter with default options
/*const cache = setupCache({
  maxAge: 15 * 60 * 1000, // Cache for 15 minutes
  exclude: { query: false }, // Enable caching for GET requests with query parameters
});*/

// Create an Axios instance with default settings
const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL || "https://your-api-base-url.com",
  headers: {
    "Content-Type": "application/json",
    // Add more default headers here
  },
  //adapter: cache.adapter, // Use the cache adapter
});

// Add request interceptor to handle auth tokens, etc.
api.interceptors.request.use(
    (config) => {
      // Use the useAuth hook to get token from AuthContext
      const { token } = useAuth(); 
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Handle request error
      return Promise.reject(error);
    }
  );

// Add response interceptor to handle errors globally
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      // Handle response errors, e.g., log out the user on 401
      if (error.response?.status === 401) {
        // Handle unauthorized access
      }
      return Promise.reject(error);
    }
);

// Define a common function to make requests
export const request = async <T>(
  url: string,
  options: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.request({
      url,
      ...options,
    });
    return response.data;
  } catch (error) {
    // Handle errors specific to your application
    console.error("API Request Error:", error);
    throw error;
  }
};
