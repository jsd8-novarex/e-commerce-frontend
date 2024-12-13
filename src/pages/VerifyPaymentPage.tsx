// import { useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { verifyPayment } from "../service/paymentService";

// function VerifyPaymentPage() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const verifyPaymentStatus = async () => {
//       const success = searchParams.get("success") === "true";
//       const orderId = searchParams.get("orderId");

//       if (!orderId) {
//         navigate("/collections");
//         return;
//       }

//       try {
//         await verifyPayment({ orderId, success });

//         if (success) {
//           alert("Your purchase has been successfully completed!");
//         } else {
//           alert("Your purchase was not successful. Please try again.");
//         }
//         navigate("/collections");
//       } catch (error) {
//         console.error("Payment verification failed:", error);
//         alert("Failed to verify payment.");
//         navigate("/collections");
//       }
//     };

//     verifyPaymentStatus();
//   }, [searchParams, navigate]);

//   return (
//     <div className='flex h-screen items-center justify-center'>
//       <p>Your purchase has been successfully completed!</p>
//     </div>
//   );
// }

// export default VerifyPaymentPage;
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { verifyPayment } from "../service/paymentService";

function VerifyPaymentPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPaymentStatus = async () => {
      const success = searchParams.get("success") === "true";
      const orderId = searchParams.get("orderId");

      if (!orderId) {
        navigate("/collections");
        return;
      }

      try {
        await verifyPayment({ orderId, success });

        if (success) {
          alert("Your purchase has been successfully completed!");
        } else {
          alert("Your purchase was not successful. Please try again.");
        }
        navigate("/collections");
      } catch (error) {
        console.error("Payment verification failed:", error);
        alert("Failed to verify payment.");
        navigate("/collections");
      }
    };

    verifyPaymentStatus();
  }, [searchParams, navigate]);

  return (
    <div className='flex h-screen items-center justify-center p-4'>
      <div className='w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-lg'>
        <p className='mb-4 text-lg font-semibold text-gray-800'>
          Your purchase has been successfully! <br /> Thank you !!!
        </p>
        <button
          className='mt-4 bg-black px-4 py-2 font-medium text-white shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75'
          onClick={() => navigate("/collections")}
        >
          Go to Collections
        </button>
      </div>
    </div>
  );
}

export default VerifyPaymentPage;
