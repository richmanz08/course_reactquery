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
import MutationsPractice from "./comonents/practice/mutations";
import InvalidatePractice from "./comonents/practice/invalidate";

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
            <Route path="/usequery" element={<UseQueryPractice />} />
            <Route path="/pagination" element={<PaginationPractice />} />
            <Route path="/mutation" element={<MutationsPractice />} />
            <Route path="/invalidate" element={<InvalidatePractice />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen />
        </Hydrate>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
