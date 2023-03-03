import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ExampleQuery } from './comonents/example';
import { HomePage } from './home';
import { ReactQueryDevtools } from "react-query/devtools";
import InfiniteScrollQuery from "./comonents/infiniteScroll";
import InitmyCache from "./comonents/initmycache";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  },
})

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/example' element={<ExampleQuery />} />
          <Route path='/infinite-scroll' element={<InfiniteScrollQuery />} />
          <Route path='/initmycache' element={<InitmyCache />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
