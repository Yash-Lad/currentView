import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

// Configure React Query client with custom settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 60 * 1000, // 30 minutes data stays fresh
      gcTime: 60 * 60 * 1000, // 60 minutes data stays in cache
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      retry: (failureCount, error) => {
        if (error?.response?.status === 429) return false;

        return failureCount < 1;
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
