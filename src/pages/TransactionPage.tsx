import CheckoutD from "../components/TransactionPage/CheckoutDesktop";
import CheckoutM from "../components/TransactionPage/CheckoutMobile";

function TransactionPage() {
  return (
    <div className='h-dvh w-dvw'>
      <CheckoutM />
      <CheckoutD />
    </div>
  );
}
export default TransactionPage;
