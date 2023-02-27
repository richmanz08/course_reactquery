import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ExampleQuery } from './comonents/example';
import { HomePage } from './home';

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
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
