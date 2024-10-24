import React from "react";
import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <div className='flex h-dvh w-dvw items-center justify-center bg-white md:bg-stone-100'>
      <div className='flex h-fit w-dvw flex-col justify-center bg-white p-10 md:w-1/2 lg:w-1/3 xl:w-1/3'>        
          <div className="mb-8">
            <h1 className='text-center text-4xl font-bold md:text-5xl'>Pangaea</h1>
          </div>
          <form>          
          <div className='py-2.5'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full border border-black px-2 h-8 md:h-10'
              required
            ></input>
          </div>
          <div className='py-2.5'>
            <input
              type='password'
              placeholder='Enter your password'
              className='w-full border border-black px-2 h-8 md:h-10 '
              required
            ></input>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='w-full bg-black text-white hover:bg-gray-600 mt-2 h-8 md:h-10 md:text-xl'
            >
              LOGIN
            </button>
          </div>
          </form>
          <div className='text-right hover:text-gray-400 mt-2'>
            <Link to="./">Forgot Password?</Link>
          </div>
          <div className='py-5 text-center underline hover:text-gray-400 md:text-xl mt-5'>
            <Link to="./">Create new account</Link>
          </div>        
      </div>
    </div>
  );
}

export default SignInPage;
