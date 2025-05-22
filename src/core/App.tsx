import "@/shared/style/app.css"
import LanguageProvider from "./context/language/LanguageProvider";
import AntdProvider from "./context/antd/AntdProvider";
import Router from "./router/Router"

const App = () => {
  return (
    <LanguageProvider>
      <AntdProvider>
        <Router />
      </AntdProvider>
    </LanguageProvider>
  )
}

export default App
