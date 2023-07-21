import Navbar from "./components/Navbar"
import { useRoutes, BrowserRouter} from "react-router-dom"
import Home from "./page/Home"
import ProductList from "./components/ProductList"

const AppRoutes = () => {
  let routes = useRoutes([
    // { path: "/", element: <Home /> },
    { path: "/", exact: true, element: <Home /> },
    { path: "/products", element: <ProductList />}
  ])

  return routes
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      </BrowserRouter>
  )
}

export default App
