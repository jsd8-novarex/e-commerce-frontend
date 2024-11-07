import { NavLink } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";

function SignInAdminPage() {
  return (
    <AuthenticationForm message="Admin">
      <div className='row-start-3 row-end-7 flex flex-col items-center justify-center'>
        <form className='flex min-w-72 flex-col gap-y-4 sm:w-96'>
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
          <div className='flex flex-col justify-center'>
            <button type='submit' className='auth-form__btn uppercase'>
              sign in
            </button>
            <NavLink to='/' className='mt-2 text-right hover:text-gray-400'>
              Forgot Password?
            </NavLink>
          </div>
        </form>
      </div>
    </AuthenticationForm>
  );
}

export default SignInAdminPage;
