import { createBrowserRouter } from "react-router-dom";
import ProductList from "../../components/ProductList.jsx";
import ProductDetail from "../../components/ProductDetail.jsx";
import ProductsLayout from "../../components/ProductsLayout.jsx";
import StartPage from "../../components/StartPage.jsx";
import NotFound from "../../components/NotFound.jsx";
import AccountPage from "../../components/AccountPage.jsx";
import SignInPage from "../../components/SignInPage.jsx";
import SignUpPage from "../../components/SignUpPage.jsx";
import AccountInformationPage from "../../components/AccountInformationPage.jsx";
import OrderPage from "../../components/OrderPage.jsx";
import CartPage from "../../components/CartPage.jsx";
import OrderingPage from "../../components/OrderingPage.jsx";
import OrderSuccessfull from "../../components/OrderSuccessfull.jsx";
const router = createBrowserRouter([
  {path: "*", element: <NotFound />},
  { path: "/", element: <StartPage /> },
  { path: "/account", element: <AccountPage />},
  { path: "/signin", element: <SignInPage />},
  { path: "/signup", element: <SignUpPage />},
  { path: "/account-information", element: <AccountInformationPage /> },
  { path: "/orders", element:  <OrderPage />},
  { path: "/cart", element: <CartPage /> },
  { path: "/order", element: <OrderingPage/>},
  { path: "/order-success", element: <OrderSuccessfull/>},

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
