import React from "react";

function Footer() {
  return (
    <footer className=" w-full">
      <div className='flex flex-col bg-black px-6 py-6 text-white md:px-12 md:py-12'>
        <div>
          <div className='footer bg-black p-8 text-white md:p-10'>
            <nav>
              <h6 className='footer-title'>Services</h6>
              <a className='link-hover link'>Branding</a>
              <a className='link-hover link'>Design</a>
              <a className='link-hover link'>Marketing</a>
              <a className='link-hover link'>Advertisement</a>
            </nav>
            <nav>
              <h6 className='footer-title'>Company</h6>
              <a className='link-hover link'>About us</a>
              <a className='link-hover link'>Contact</a>
              <a className='link-hover link'>Jobs</a>
              <a className='link-hover link'>Press kit</a>
            </nav>
            <nav>
              <h6 className='footer-title'>Legal</h6>
              <a className='link-hover link'>Terms of use</a>
              <a className='link-hover link'>Privacy policy</a>
              <a className='link-hover link'>Cookie policy</a>
            </nav>

            <form>
              <h6 className='footer-title text-white'>SIGN UP FOR GUCCI UPDATES</h6>
              <fieldset className='form-control w-80 text-black'>
                <label className='label'>
                  <span className='label-text text-white'>Enter your email address</span>
                </label>
                <div className='join gap-4 rounded-none'>
                  <input
                    type='text'
                    placeholder='username@site.com'
                    className='input join-item input-bordered border-b-2 border-b-white bg-black text-white'
                  />
                  <button className='btn btn-primary join-item rounded-none border-black bg-black hover:border-gray-600 hover:bg-gray-600'>
                    <svg
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m9 5 7 7-7 7'
                      />
                    </svg>
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className='md:flex- flex flex-col items-center justify-between gap-4 md:flex-row'>
          <p>Copyright 2024 © SHINING. All Rights Reserved.</p>

          <p className='flex cursor-pointer gap-8 pr-10'>
            <a>
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z' />
              </svg>
            </a>

            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </a>
          </p>
        </div>
        <div className='mb-0 pt-7 text-center text-7xl md:text-9xl'>
          <span>SHINING</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
