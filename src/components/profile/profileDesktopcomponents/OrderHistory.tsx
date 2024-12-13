import EditButton from "../../button/EditButton";
import { profileData } from "../../../constraints/PROFILE_DATA";

function OrderHistory() {
  return (
    <>
      <div className='h-[400px] bg-[#fdfaf5] p-8 shadow-md md:w-[540px] lg:w-[700px] xl:w-[900px]'>
        <div className='mb-6 flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-gray-800'>Order History</h2>
        </div>

        <hr className='mb-6' />

        <div>
          <div className='w-full'>
            <p className='mb-8 text-gray-600'>
              <strong>Add,delete or change your addresses here.</strong>
            </p>
            <div className='flex justify-between border p-4'>
              <div>
                <p>{profileData.name}</p>
                <p className='text-gray-600'>{profileData.email}</p>
                <p className='text-gray-600'>{profileData.tel}</p>
              </div>
              <div>
                <EditButton />
              </div>
            </div>
          </div>
          <div className='my-4 flex justify-center'>
            <button className='btn btn-wide rounded-none bg-[#fdfaf5]'>Add an address</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;
