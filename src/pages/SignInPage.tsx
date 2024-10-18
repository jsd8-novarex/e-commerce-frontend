import React from "react";

function SignInPage() {
  return (
    <div className='flex justify-center'>
      <form className='relative flex h-dvh w-dvw flex-col justify-center p-10 md:w-2/5'>
        <div className='text-center text-xl'>Log in</div>
        <div className='py-2.5'>
          <input
            type='email'
            placeholder='Enter your email'
            className='w-full border border-black'
            required
          ></input>
        </div>
        <div className='py-2.5'>
          <input
            type='password'
            placeholder='Enter your password'
            className='w-full border border-black'
            required
          ></input>
        </div>
        <div className='py-2.5'>
          <input type='checkbox' className='border-black'></input>
          <label>Remember me</label>
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='w-full bg-black text-white hover:bg-gray-600'>
            LOGIN
          </button>
        </div>
        <div className='text-right hover:text-gray-400'>
          <a href=''>Forgot Password?</a>
        </div>
        <div className='py-2.5 text-center underline hover:text-gray-400'>
          <a href=''>Create new account</a>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
