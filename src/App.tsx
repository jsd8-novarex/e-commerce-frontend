import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CollectionsPage from "./pages/CollectionsPage";
import ProductPage from "./pages/ProductPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/ProfilePage";
import TransactionPage from "./pages/TransactionPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='product' element={<ProductPage />} caseSensitive />
          <Route path='collections' element={<CollectionsPage />} caseSensitive />
          <Route path='profile' element={<ProfilePage />} caseSensitive />
          <Route path='transaction' element={<TransactionPage />} caseSensitive />
          <Route path='payment' element={<PaymentPage />} caseSensitive />
        </Route>
        <Route path='sign-in' element={<SignInPage />} caseSensitive />
        <Route path='sign-up' element={<SignUpPage />} caseSensitive />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
