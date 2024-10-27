import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";

function SignUpPage() {
  return (
    <AuthenticationForm>
      <div className="flex justify-center text-2xl font-bold mb-4">
        <h2>Create an Account</h2>
      </div>
      <form className="flex flex-col gap-y-4">        
          <input
            type='email'
            placeholder='Email address'
            className='auth-form__input'
            minLength={8}
            required
          />  

          <input
            type='text'
            placeholder='Username'
            className='auth-form__input'
            minLength={8}
            required
          />   
       
          <input
            type='password'
            placeholder='Password'
            className='auth-form__input'
            minLength={8}
            required
          />      
       
          <input
            type='password'
            placeholder='Confirm password'
            className='auth-form__input'
            minLength={8}
            required
          />
       
        <div className='flex justify-center'>
          <button
            type='submit'
            className='auth-form__btn'
          >
            SING UP
          </button>
        </div>
      </form>   

    </AuthenticationForm>
  );
}

export default SignUpPage;
