import { BrowserRouter } from "react-router-dom";
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query'
import { HomePage } from './components';
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity
    }
  },
})

const App = () => {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <HomePage />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
