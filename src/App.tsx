import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { QueryClientProvider, QueryClient, Hydrate, dehydrate } from 'react-query'
import { HomePage } from './comonents';
import { ReactQueryDevtools } from "react-query/devtools";
import UseQueryPractice from "./comonents/practice/usequery";
import PaginationPractice from "./comonents/practice/pagination";
import MutationsPractice from "./comonents/practice/mutations";
import InvalidatePractice from "./comonents/practice/invalidate";
import HandlePractice from "./comonents/practice/handle-api";
import InfiniteQuelyPractice from "./comonents/practice/infinite-scroll";
import CancelledApiPractice from "./comonents/practice/cancelled-api";

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
            <Route path="/cancelled" element={<CancelledApiPractice />} />
            <Route path="/handle/:id" element={<HandlePractice />} />
            <Route path="/infinite-scroll" element={<InfiniteQuelyPractice />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen />
        </Hydrate>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
