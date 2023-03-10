import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { QueryClientProvider, QueryClient, Hydrate, dehydrate } from 'react-query'
import { ExampleQuery } from './comonents/example';
import { HomePage } from './comonents';
import { ReactQueryDevtools } from "react-query/devtools";
import InfiniteScrollQuery from "./comonents/infiniteScroll";
import InitmyCache from "./comonents/initmycache";
import UseQueryPractice from "./comonents/practice/usequery";
import PaginationPractice from "./comonents/practice/pagination";

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
  const dehydratedState = dehydrate(queryClient, { shouldDehydrateQuery: () => true })
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
        <Routes>
          <Route path='/' element={<HomePage />} />
            {/* <Route path='/example' element={<ExampleQuery />} />
          <Route path='/infinite-scroll' element={<InfiniteScrollQuery />} />
          <Route path='/initmycache' element={<InitmyCache />} /> */}
            <Route path="/usequery" element={<UseQueryPractice />} />
            <Route path="/pagination" element={<PaginationPractice />} />
            {/* <Route path="/usequery" element={<UseQueryPractice />} /> */}
        </Routes>
        <ReactQueryDevtools initialIsOpen />
        </Hydrate>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
