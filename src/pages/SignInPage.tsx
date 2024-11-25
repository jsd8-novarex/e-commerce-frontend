import { NavLink } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";
import useAuthentication from "../hook/user/useAuthentication";

function SignInPage() {
  const { isProcessing, dataForVerify,authStatus, handleInputChange, handleAuthentication } =
    useAuthentication();

  return (
    <AuthenticationForm status='sign-in' message='Enter your account details'>
      <div className='row-start-3 row-end-7 flex flex-col items-center justify-center'>
        <form onSubmit={handleAuthentication} className='flex min-w-72 flex-col gap-y-4 sm:w-96'>
          <div className='flex flex-col'>
            <label htmlFor='email' className='auth-form__label'>
              Email
            </label>
            <input
              id='email'
              type='email'
              name="email"
              placeholder='Enter your email'
              value={dataForVerify.email}
              onChange={handleInputChange}
              disabled={isProcessing}
              required
              className='auth-form__input'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='auth-form__label'>
              Password
            </label>
            <input
              id='password'
              type='password'
              name="password"
              placeholder='Enter your password'
              value={dataForVerify.password}
              minLength={8}
              onChange={handleInputChange}
              disabled={isProcessing}
              required
              className='auth-form__input'
            />
          </div>
          <div>{authStatus && <div>{authStatus}</div>}</div>
          <div className='flex flex-col justify-center'>
            <button type='submit' disabled={isProcessing} className='auth-form__btn uppercase'>
              sign in
            </button>
            <NavLink to='/' className='mt-2 text-right hover:text-gray-400'>
              Forgot Password?
            </NavLink>
          </div>
        </form>
      </div>
      <div className='row-start-7 text-center'>
        <NavLink to='/sign-up' className='mt-5 py-5 underline hover:text-gray-400 md:text-xl'>
          Create new account
        </NavLink>
      </div>
    </AuthenticationForm>
  );
}

export default SignInPage;
