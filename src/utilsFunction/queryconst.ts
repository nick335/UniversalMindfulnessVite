export const getQueryOptions = (staleTime = 1000 * 60 * 15) => ({
  staleTime, // Default stale time is 10 minutes, can override
  refetchOnWindowFocus: false, // Prevent refetching on window focus
  refetchOnReconnect: false, // Prevent refetching on reconnect
})