import { BrowserRouter } from "react-router-dom"
import { ArticlesProvider } from "./context/ArticlesProvider"
import PublicRoutes from "./routes/PublicRoutes"
import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <>
      <BrowserRouter>
        <ArticlesProvider>
          <PublicRoutes/>
        </ArticlesProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </>
  )
}

export default App