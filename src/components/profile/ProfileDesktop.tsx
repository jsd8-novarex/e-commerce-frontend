import EditButton from "../button/EditButton";

function DesktopProfilePage() {
  return (
    <main className='hidden h-full w-full bg-white sm:mb-36 sm:ml-auto sm:mr-auto sm:mt-16 md:block'>
      <div className='flex items-center justify-between gap-x-2'>
        {/* Sidebar */}
        <div className='min-w-60'>
          <h1 className='mb-5 text-2xl uppercase text-gray-800'>Account</h1>
          <div>
            <button className='mb-3 flex h-12 w-full items-center text-gray-700'>
              <p className='uppercase'> Order history </p>
            </button>
            <button className='mb-3 flex h-12 w-full items-center text-gray-700'>
              <p className='uppercase'> Profile information </p>
            </button>
            <button className='mb-3 flex h-12 w-full items-center text-gray-700'>
              <p className='uppercase'> Address book </p>
            </button>
            <button className='mb-3 flex h-12 w-full items-center text-gray-700'>
              <p className='uppercase'> Payments </p>
            </button>

            <hr className='my-6' />

            <div>
              <button className='text-gray-600 underline'>
                <span>Sign-out</span>
              </button>
            </div>
          </div>
        </div>
        {/* Profile Information */} {/*w-[calc(100%-280px)] แก้ไข*/}
        <div className='w-[calc(100%-280px)] rounded-md bg-[#fdfaf5] p-8 shadow-md'>
          <div className='mb-6 flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-gray-800'>Profile information</h2>
            <EditButton />
          </div>

          <hr className='mb-6' />

          <div className='flex justify-between'>
            <div>
              <p className='mb-2 text-gray-600'>
                <strong>Name</strong>: Mr. Name
              </p>
              <p className='mb-2 text-gray-600'>
                <strong>E-mail</strong>: email@gmail.com
              </p>
              <p className='mb-2 text-gray-600'>
                <strong>Telephone</strong>: +123456789
              </p>
              <p className='mb-2 text-gray-600'>
                <strong>Date of birth</strong>: Jan 1, 0001
              </p>
              <p className='mb-2 text-gray-600'>
                <strong>Password</strong>: ********
              </p>
            </div>

            <div className='ml-12 border-l pl-6'>
              <p className='mb-2 text-gray-600'>
                <strong>Billing address</strong>:
              </p>
              <p className='mb-2 text-gray-600'>
                Mr. name <br />
                Address <br />
                tel.
              </p>
              <p className='text-gray-600'>
                Billing name and address must match the credit card you will be using.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DesktopProfilePage;
//
