import axios from 'axios'

// Get API key from environment variables
const API_KEY= import.meta.env.VITE_NEWS_API_KEY
const BASE_URL= "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://newsapi.org/v2")

// Create axios instance with base configuration for News API
export const newsAPI= axios.create({
    baseURL:BASE_URL,
    timeout:10000, // 10 second timeout for requests
    headers:{
        "Content-Type": "application/json",
    }
})

// Request interceptor - automatically adds API key to every request
newsAPI.interceptors.request.use((config)=>{
    config.params={
        ...config.params,
        apiKey: API_KEY
    }
    return config
})

// Response interceptor - handles errors and logs them for debugging
newsAPI.interceptors.response.use(
    (response)=>response,
    (error)=>{
        console.error('News API error: ', error.response?.data || error.message)
        return Promise.reject(error)
    }
)

// Collection of functions to interact with the News API
export const newsServices={
    //Fetches the latest top headlines for a specific country
    getTopHeadlines:async(country='us', pageSize=20)=>{
        try {
            const params={
                country,
                pageSize,
            }

            const response=await newsAPI.get('/top-headlines',{params})
            return response.data
        } catch (error) {
            throw new Error(`Failed to fetch top headlines: ${error.message}`)             
        }
    },

    // Searches through millions of articles from various sources
    getEverything: async(query,language='en',sortBy='publishedAt', pageSize=20)=>{
        try {
            const params={
                q:query,
                language,
                sortBy,
                pageSize,
            }

            const response=await newsAPI.get('/everything', {params})
            return response.data
        } catch (error) {
            throw new Error(`Failed to fetch search news: ${error.message}`)
        }
    },

    // Gets top headlines filtered by a specific category (business, technology, sports, health, etc.)
    getNewsByCategory: async(category, country='us', pageSize=20)=>{
        try {
            const params={
                category,
                country,
                pageSize
            }

            const response=await newsAPI.get('/top-headlines', {params})
            return response.data
        } catch (error) {
            throw new Error(`Failed to fetch ${category} news: ${error.message}`)
        }

    },

    // Gets a list of available news sources
    getSources:async(category=null, country=null,language='en' )=>{
        try {
            const params={
                language,
                // Only include category and country in params if they're provided
                ...(category && {category}),
                ...(country && {country}),
            }

            const response=await newsAPI.get('/sources', {params})
            return response.data
        } catch (error) {
            throw new Error(`Failed to fetch news sources: ${error.message}`)
        }
    },
}