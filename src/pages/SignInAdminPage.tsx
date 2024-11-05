import AuthenticationForm from "../components/AuthenticationForm";

function SignInAdminPage() {
  return (
    <AuthenticationForm>
      {/* <div className='mb-4 flex justify-center text-xl font-bold'>
        <h2>Login as a Admin User</h2>
      </div> */}
      <form className='mt-2 flex flex-col gap-y-6'>
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
      {/* <div className='mt-2 text-right hover:text-gray-400'>
        <Link to='/'>Forgot Password?</Link>
      </div> */}
    </AuthenticationForm>
  );
}

export default SignInAdminPage;
