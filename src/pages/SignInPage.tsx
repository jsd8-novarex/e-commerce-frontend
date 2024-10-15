import React from "react";

function SignInPage() {
  return (
    <div className='flex justify-center'>
      <div className='flex w-full flex-col p-10 md:w-2/4'>
        <div className='text-center text-xl'>SignInPage</div>
        <h1>Log in</h1>
        <h3 className='text-xs'>Enter your email and we'll send you a login code</h3>
        <div className='py-2.5'>
          <h3>Email</h3>
          <input type='email' className='w-full border border-black'></input>
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='w-full bg-black text-white'>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
