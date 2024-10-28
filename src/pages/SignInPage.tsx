import { Link } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";

function SignInPage() {
  return (
    <AuthenticationForm>
      <form className='mt-8 flex flex-col gap-y-6'>
        <input
          type='email'
          placeholder='Enter your email'
          className='auth-form__input'
          minLength={8}
          required
        />

        <input
          type='password'
          placeholder='Enter your password'
          className='auth-form__input'
          minLength={8}
          required
        />

        <div className='flex justify-center'>
          <button type='submit' className='auth-form__btn'>
            LOGIN
          </button>
        </div>
      </form>
      <div className='mt-2 text-right hover:text-gray-400'>
        <Link to='/'>Forgot Password?</Link>
      </div>
      <div className='mt-5 py-5 text-center underline hover:text-gray-400 md:text-xl'>
        <Link to='/'>Create new account</Link>
      </div>
    </AuthenticationForm>
  );
}

export default SignInPage;
