import { Link } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";

function SignInAdminPage() {
  return (
    <AuthenticationForm>
      <div className="flex justify-center text-xl font-bold mb-4">
        <h2>Login as a Admin User</h2>
      </div>
      <form className="flex flex-col gap-y-4 mt-2">        
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
          <button
            type='submit'
            className='auth-form__btn'
          >
            LOGIN
          </button>
        </div>
      </form>
      <div className='mt-2 text-right hover:text-gray-400'>
        <Link to='/'>Forgot Password?</Link>
      </div>      
    </AuthenticationForm>
  );
}

export default SignInAdminPage;