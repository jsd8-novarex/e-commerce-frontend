import CheckoutD from "../components/transaction/CheckoutDesktop";
import CheckoutM from "../components/transaction/CheckoutMobile";

function TransactionPage() {
  return (
    <div className='min-h-dvh w-full px-5 pt-24 sm:px-10'>
      <CheckoutM />
      <CheckoutD />
    </div>
  );
}
export default TransactionPage;
