import "shared/style/app.css"
import { ConfigProvider } from "antd"
import theme from "./theme"
import ptBR from "antd/lib/locale/pt_BR";
import LanguageProvider from "./context/language/LanguageProvider";
import Router from "./router/Router"

const App = () => {
  return (
    <ConfigProvider theme={theme} locale={ptBR}>
      <LanguageProvider>
        <Router />
      </LanguageProvider>
    </ConfigProvider>
  )
}

export default App
