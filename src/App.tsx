import { BrowserRouter } from "react-router-dom"
import PublicRoutes from "./routes/PublicRoutes"
import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <>
      <BrowserRouter>
        <PublicRoutes/>
      </BrowserRouter>
      <GlobalStyles/>
    </>
  )
}

export default App