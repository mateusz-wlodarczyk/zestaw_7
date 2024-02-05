import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, staleTime: 60_000 },
    queryCache: new QueryCache(),
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>
);
