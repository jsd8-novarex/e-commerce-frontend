import { PropsWithChildren } from "react";

type AuthenticationFormPropsType = {
  message?: string;
};

function AuthenticationForm({ message, children }: PropsWithChildren<AuthenticationFormPropsType>) {
  return (
    <div className='grid h-dvh w-dvw grid-cols-12 bg-white'>
      <div className='col-span-5 hidden bg-gradient-to-r from-[#000851] to-white md:block lg:col-span-7' />
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
