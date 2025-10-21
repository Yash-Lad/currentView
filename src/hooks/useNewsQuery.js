import { useQuery } from "@tanstack/react-query";
import { newsServices } from "../services/newsServices";

// Custom hook to fetch news articles by category
export const useNewsByCategory=(category, country="us", pageSize=12)=>{
    return useQuery({
        queryKey:["news", "category", category,country, pageSize],
        // Function that fetches the data from the API
        queryFn:()=>newsServices.getNewsByCategory(category,country,pageSize),
        select: (data)=> data.articles,
    })
}

// Custom hook to search for news articles based on a query
export const useSearchNews=(searchQuery, language="en", sortBy="publishedAt", pageSize=12)=>{
    return useQuery({
        queryKey: ["news", "search",searchQuery, language, sortBy, pageSize],
        // Function that performs the search via API
        queryFn:()=> newsServices.getEverything(searchQuery,language, sortBy, pageSize),
        select: (data)=> data.articles || [],
        enabled:!!searchQuery.trim(),

    })
}