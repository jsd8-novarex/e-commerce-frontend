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
import SignInAdminPage from "./pages/SignInAdminPage";
import AdminPage from "./pages/AdminPage";
import AboutUsPage from "./pages/AboutUsPage";
// import useGetTest from "./hook/useGetTest";

function App() {
  // useGetTest()
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/product/:productChoiceId' element={<ProductPage />} caseSensitive />
          <Route path='collections' element={<CollectionsPage />} caseSensitive />
          <Route path='profile' element={<ProfilePage />} caseSensitive />
          <Route path='transaction' element={<TransactionPage />} caseSensitive />
          <Route path='payment' element={<PaymentPage />} caseSensitive />
          <Route path='about' element={<AboutUsPage />} caseSensitive />
        </Route>
        <Route path='sign-in' element={<SignInPage />} caseSensitive />
        <Route path='sign-up' element={<SignUpPage />} caseSensitive />
        <Route path='sign-in-admin' element={<SignInAdminPage />} caseSensitive />
        <Route path='admin' element={<AdminPage />} caseSensitive />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
