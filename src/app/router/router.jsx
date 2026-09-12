import { createBrowserRouter } from "react-router-dom";
import ProductList from "../../components/ProductList.jsx";
import ProductDetail from "../../components/ProductDetail.jsx";
import ProductsLayout from "../../components/ProductsLayout.jsx";
import StartPage from "../../components/StartPage.jsx";
import NotFound from "../../components/NotFound.jsx";
const router = createBrowserRouter([
  {path: "*", element: <NotFound />},
  { path: "/", element: <StartPage /> },
  {
    path: "/products",
    element: <ProductsLayout />,
    children: [
      { path: ":id", element: <ProductDetail /> },
      { index: true, element: <ProductList /> },
      
    ],
  },
]);
export default router;
