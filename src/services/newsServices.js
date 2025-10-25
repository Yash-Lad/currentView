import axios from 'axios'

// Get API key from environment variables
const API_KEY= import.meta.env.VITE_NEWS_API_KEY
// Use proxy endpoint in development, direct API in production
const BASE_URL= import.meta.env.DEV ? "/api/gnews" : "https://gnews.io/api/v4"

// Debug: Log API key status (without exposing the actual key)
console.log('API Key loaded:', !!API_KEY)
console.log('API Key length:', API_KEY ? API_KEY.length : 0)

// Create axios instance with base configuration for GNews API
export const newsAPI= axios.create({
    baseURL:BASE_URL,
    timeout:10000, // 10 second timeout for requests
    headers:{
        "Content-Type": "application/json",
    }
})

// Response interceptor - handles errors and logs them for debugging
newsAPI.interceptors.response.use(
    (response)=>{
        console.log('✅ API Request successful:', response.config.url)
        return response
    },
    (error)=>{
        console.error('❌ GNews API Error Details:')
        console.error('Status:', error.response?.status)
        console.error('Status Text:', error.response?.statusText)
        console.error('Error Data:', error.response?.data)
        console.error('Error Message:', error.message)
        console.error('Request URL:', error.config?.url)
        console.error('Request Params:', error.config?.params)
        
        // Provide user-friendly error messages
        if (error.code === 'NETWORK_ERROR' || error.message.includes('Network Error')) {
            throw new Error('Network Error: Please check your internet connection and try again.')
        } else if (error.response?.status === 401) {
            throw new Error('Invalid API Key: Please check your VITE_NEWS_API_KEY in environment variables.')
        } else if (error.response?.status === 403) {
            throw new Error('API Access Forbidden: Your API key may be invalid or expired.')
        } else if (error.response?.status === 429) {
            throw new Error('Rate Limit Exceeded: Please wait a moment before making another request.')
        } else if (error.response?.status >= 500) {
            throw new Error('Server Error: The news service is temporarily unavailable.')
        }
        
        return Promise.reject(error)
    }
)

// Collection of functions to interact with the GNews API
export const newsServices={
    //Fetches the latest top headlines for a specific country
    // getTopHeadlines:async(country='us', pageSize=20)=>{
    //     try {
    //         const params={
    //             country,
    //             max: pageSize,
    //             apikey: API_KEY
    //         }

    //         const response=await newsAPI.get('/top-headlines',{params})
    //         return response.data
    //     } catch (error) {
    //         throw new Error(`Failed to fetch top headlines: ${error.message}`)             
    //     }
    // },

    // Searches through millions of articles from various sources
    getEverything: async(query,language='en',sortBy='publishedAt', pageSize=20)=>{
        try {
            const params={
                q:query,
                lang: language,
                sortby: sortBy,
                max: pageSize,
                apikey: API_KEY
            }

            const response=await newsAPI.get('/search', {params})
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
                max: pageSize,
                apikey: API_KEY
            }

            const response=await newsAPI.get('/top-headlines', {params})
            return response.data
        } catch (error) {
            throw new Error(`Failed to fetch ${category} news: ${error.message}`)
        }

    },

    // Gets a list of available news sources
    // getSources:async(category=null, country=null,language='en' )=>{
    //     try {
    //         const params={
    //             lang: language,
    //             // Only include category and country in params if they're provided
    //             ...(category && {category}),
    //             ...(country && {country}),
    //             apikey: API_KEY
    //         }

    //         const response=await newsAPI.get('/sources', {params})
    //         return response.data
    //     } catch (error) {
    //         throw new Error(`Failed to fetch news sources: ${error.message}`)
    //     }
    // },
}