import { useNavigate } from "react-router";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className='grid h-dvh w-dvw grid-rows-6 p-4 text-xl sm:p-8 md:p-12'>
      <span>404</span>
      <div className='row-start-2 sm:row-start-3'>
        <div className='my-8'>
          <h1>Page not found</h1>
        </div>
        <p>The page you are looking for doesn't exist.</p>
        <div className='mt-12'>
          <button
            type='button'
            className='btn btn-primary w-24 border-black bg-black text-white hover:border-black hover:bg-black hover:text-white'
            onClick={() => navigate("/")}
          >
            home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
