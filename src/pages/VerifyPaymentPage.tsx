import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCompleteCartStore } from "../store/cart/postCompleteCart.store";
import usePostCurrentCart from "../hook/cart/usePostCurrentCart";
import { useCustomerStore } from "../store/customers/customerStore";
import { postCurrentCartStore } from "../store/cart/postCurrentCart.store";

const VerifyPaymentPage = () => {
  const navigate = useNavigate();
  const { customer } = useCustomerStore();
  const { fetchCurrentCartData } = postCurrentCartStore();
  const { data } = usePostCurrentCart(customer ? customer._id : "");
  const { completeCart, loading, error } = postCompleteCartStore();

  const [hasReloaded, setHasReloaded] = useState(false); // Track reload status

  const cartId = data?.cart?._id || null;
  const paymentMethod = "credit_card"; // Adjust as needed for your use case
  const customerId = customer?._id;

  useEffect(() => {
    if (cartId && paymentMethod) {
      completeCart({ cartId, paymentMethod }).catch((err) => {
        console.error("Error completing cart:", err);
      });
    }
  }, [cartId, paymentMethod, completeCart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchCurrentCartData(customerId as string);
      } catch (err) {
        console.error("Error fetching current cart data:", err);
      }
    };

    if (customer?._id) {
      fetchData();
    }
  }, [customer?._id, customerId, fetchCurrentCartData]);

  // Reload only once when the cart is completed successfully
  useEffect(() => {
    if (!hasReloaded && !error && data) {
      setHasReloaded(true); // Ensure reload happens only once
      window.location.reload();
    }
  }, [hasReloaded, error, data]);

  return (
    <div className='flex h-screen items-center justify-center p-4'>
      <div className='w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-lg'>
        <p className='mb-4 text-lg font-semibold text-gray-800'>
          Your purchase has been completed! <br /> Thank you!!!
        </p>

        <button
          className='mt-4 bg-black px-4 py-2 font-medium text-white shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75'
          onClick={() => navigate("/collections")}
          disabled={loading}
        >
          Go to Collections
        </button>
      </div>
    </div>
  );
};

export default VerifyPaymentPage;
