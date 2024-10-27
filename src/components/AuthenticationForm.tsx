import { PropsWithChildren } from "react";

function AuthenticationForm({ children }: PropsWithChildren) {
  return (
    <div className='flex h-dvh w-dvw items-center justify-center bg-white md:bg-stone-100'>
      <div className='flex h-fit w-dvw flex-col justify-center bg-white p-10 md:w-1/2 lg:w-1/3 xl:w-1/3'>
        <div className='mb-6'>
          <h1 className='text-center text-4xl font-bold md:text-5xl'>Pangaea</h1>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthenticationForm;
