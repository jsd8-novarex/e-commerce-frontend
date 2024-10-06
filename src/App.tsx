import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='product' element={<ProductPage />} caseSensitive />
        </Route>
        <Route path='sign-in' element={<SignInPage />} caseSensitive />
        <Route path='sign-up' element={<SignUpPage />} caseSensitive />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
