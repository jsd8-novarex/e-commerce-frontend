import { PropsWithChildren } from "react";

function AuthenticationForm({ children }: PropsWithChildren) {
  return (
    <div className='flex h-dvh w-dvw items-center justify-center bg-white md:bg-stone-100'>
      <div className='flex h-2/3 w-full flex-col justify-center gap-y-12 bg-white p-4 sm:justify-evenly sm:gap-y-4 sm:p-10 md:w-1/2 lg:w-1/3'>
        <div className='mb-4 flex flex-col items-center gap-4 text-2xl font-bold'>
          <h1 className='text-center text-4xl font-bold uppercase md:text-5xl'>Pangaea</h1>
          <h2>Create an Account</h2>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthenticationForm;
