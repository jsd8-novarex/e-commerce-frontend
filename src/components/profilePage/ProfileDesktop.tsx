function DesktopProfilePage() {
  return (
    <main className='hidden h-full w-full bg-white sm:mb-36 sm:ml-auto sm:mr-auto sm:mt-16 sm:px-4 md:block md:px-16 lg:px-24'>
      <div className='flex justify-between'>
        {/* Sidebar */}
        <div className='w-72'>
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

        {/* Profile Information */}
        <div className='w-[calc(100%-280px)] bg-[#fdfaf5] p-8 shadow-md'>
          <div className='mb-6 flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-gray-800'>Profile information</h2>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                />
              </svg>
            </button>
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
