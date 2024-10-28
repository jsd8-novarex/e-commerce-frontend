import PaymentD from "../components/PaymentPage/PaymentDesktop";
import PaymentM from "../components/PaymentPage/PaymentMobile";

function PaymentPage() {
  return (
    <div className='h-dvh w-dvw'>
      <PaymentM />
      <PaymentD />
    </div>
  );
}

export default PaymentPage;
