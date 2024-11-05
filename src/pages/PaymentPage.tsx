import PaymentD from "../components/payment/PaymentDesktop";
import PaymentM from "../components/payment/PaymentMobile";

function PaymentPage() {
  return (
    <div className='min-h-dvh w-full py-24'>
      <PaymentM />
      <PaymentD />
    </div>
  );
}

export default PaymentPage;
