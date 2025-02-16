import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./store/queryClient";
import AppRoutes from "./pages/routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
