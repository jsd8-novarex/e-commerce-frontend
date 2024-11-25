import { NavLink } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";
import useRegistration from "../hook/user/useRegistration";

function SignUpPage() {
  const { isProcessing, dataForVerify, regStatus, errors, handleInputChange, handleRegistration } =
    useRegistration();

  return (
    <AuthenticationForm status='sign-up' message='Create Account'>
      <div className='row-start-3 row-end-7 flex flex-col items-center justify-center'>
        <form onSubmit={handleRegistration} className='mb-4 flex min-w-72 flex-col gap-y-4 sm:w-96'>
          <div className='flex flex-col'>
            <label htmlFor='email' className='auth-form__label'>
              Email
            </label>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={dataForVerify.email}
              onChange={handleInputChange}
              disabled={isProcessing}
              className='auth-form__input'
              minLength={8}
              required
            />
            {errors.email && <small className='text-red-700'>{errors.email}</small>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='auth-form__label'>
              Password
            </label>
            <input
              id='password'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={dataForVerify.password}
              onChange={handleInputChange}
              disabled={isProcessing}
              className='auth-form__input'
              minLength={8}
              required
            />
            {errors.password && <small className='text-red-700'>{errors.password}</small>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='confirm-password' className='auth-form__label'>
              Confirm Password
            </label>
            <input
              id='confirm-password'
              type='password'
              name='confirm_password'
              placeholder='Enter your confirm password'
              value={dataForVerify.confirm_password}
              onChange={handleInputChange}
              disabled={isProcessing}
              className='auth-form__input'
              minLength={8}
              required
            />
            {errors.confirmPassword && (
              <small className='text-red-700'>{errors.confirmPassword}</small>
            )}
          </div>
          <div>{regStatus && <div>{regStatus}</div>}</div>
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
