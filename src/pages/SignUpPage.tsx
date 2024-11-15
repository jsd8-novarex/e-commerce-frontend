import { NavLink } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";

function SignUpPage() {
  return (
    <AuthenticationForm status='sign-up' message='Create Account'>
      <div className='row-start-3 row-end-7 flex flex-col items-center justify-center'>
        <form className='mb-4 flex min-w-72 flex-col gap-y-4 sm:w-96'>
          <div className='flex flex-col'>
            <label htmlFor='email' className='auth-form__label'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email'
              className='auth-form__input'
              minLength={8}
              required
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='auth-form__label'>
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='Enter your password'
              className='auth-form__input'
              minLength={8}
              required
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='confirm-password' className='auth-form__label'>
              Confirm Password
            </label>
            <input
              id='confirm-password'
              type='password'
              placeholder='Enter your confirm password'
              className='auth-form__input'
              minLength={8}
              required
            />
          </div>
          <div className='flex flex-col justify-center'>
            <button type='submit' className='auth-form__btn'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className='row-start-7 text-center'>
        <NavLink to='/sign-in' className='mt-5 py-5 underline hover:text-gray-400 md:text-xl'>
          Sign in to your account
        </NavLink>
      </div>
    </AuthenticationForm>
  );
}

export default SignUpPage;
