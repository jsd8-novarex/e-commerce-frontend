import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export type AuthenticationFormPropsType = {
  status: "sign-in" | "sign-up" | "sign-in-admin";
  message?: string;
};

function AuthenticationForm({
  status,
  message,
  children,
}: PropsWithChildren<AuthenticationFormPropsType>) {
  const navigate = useNavigate();

  return (
    <div className='relative grid h-dvh w-dvw grid-cols-12 bg-white'>
      <button
        type='button'
        onClick={() => {
          navigate("/");
        }}
        className='btn btn-circle absolute left-4 top-4 sm:left-6 sm:top-6'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
          />
        </svg>
      </button>
      <div className=' col-span-5 hidden bg-gradient-to-r from-black to-blue-900 md:block lg:col-span-7'>
        {status === "sign-in" && (
          <div className='mx-16 justify-center h-full flex flex-col gap-8'>
            <h2 className='sm:text-4xl md:text-5xl lg:text-6xl text-white'>Welcome back!</h2>
            <p className='sm:text-3xl md:text-4xl lg:text-5xl text-white'>New styles are ready for you.</p>
          </div>
        )}
        {status === "sign-up" && (
          <div className='mx-16 justify-center h-full flex flex-col gap-8'>
            <h2 className='sm:text-4xl md:text-5xl lg:text-6xl text-white'>Join SHINING</h2>
            <p className='sm:text-3xl md:text-4xl lg:text-5xl text-white'>and discover your style!</p>
          </div>
        )}
        {status === "sign-in-admin" && <h2 className='sm:text-4xl md:text-5xl lg:text-6xl text-center text-white'>Welcome"</h2>}
      </div>
      <div className='col-span-full grid w-full grid-rows-7 p-4 md:col-span-7 lg:col-span-5 xl:p-12'>
        <div className='row-start-2 flex flex-col items-center gap-4'>
          <h2 className='text-4xl font-bold uppercase md:text-5xl'>Shining</h2>
          <h3>{message}</h3>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthenticationForm;
