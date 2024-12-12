import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
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
import { useCustomerProfile } from "./hook/customers/useCustomerHooks";
import { useCallback, useEffect, useRef } from "react";

function App() {
  const { fetchCustomerProfile } = useCustomerProfile();
  const secret = localStorage.getItem("token");
  const isMounted = useRef<boolean>(true);

  const getCustomer = useCallback(async () => {
    try {
      if (secret) {
        await fetchCustomerProfile();
      } else {
        throw new Error(" Invalid secret");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Error parsing secret or fetching register:", error);
    }
  }, [secret, fetchCustomerProfile]);

  useEffect(() => {
    if (secret && isMounted.current) {
      getCustomer();
    }

    return () => {
      isMounted.current = false;
    };
  }, [getCustomer, secret]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutUsPage />} caseSensitive />
          <Route path='/product/:productChoiceId' element={<ProductPage />} caseSensitive />
          <Route path='collections' element={<CollectionsPage />} caseSensitive />
          <Route element={<PrivateRoute />}>
            <Route path='profile' element={<ProfilePage />} caseSensitive />
            <Route path='transaction' element={<TransactionPage />} caseSensitive />
            <Route path='payment' element={<PaymentPage />} caseSensitive />
          </Route>
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
