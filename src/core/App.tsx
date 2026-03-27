import "@/shared/style/app.css"
import LanguageProvider from "./context/language/LanguageProvider";
import AntdProvider from "./context/antd/AntdProvider";
import Router from "./router/Router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "@/shared/components/errorBoundary/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => {
  return (
    <LanguageProvider>
      <AntdProvider>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            <Router />
          </ErrorBoundary>
        </QueryClientProvider>
      </AntdProvider>
    </LanguageProvider>
  )
}

export default App
