import axios from 'axios'

// Get API key from environment variables
const API_KEY= import.meta.env.VITE_NEWS_API_KEY
const BASE_URL= "https://gnews.io/api/v4"

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
    (response)=>response,
    (error)=>{
        console.error('GNews API error: ', error.response?.data || error.message)
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