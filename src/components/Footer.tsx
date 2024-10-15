import React from "react";

function Footer() {
  return (
    <footer>
      <div className='flex w-dvw flex-col bg-black px-12 pb-12 text-white'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div>
            <ul>
              <li>ABOUT</li>
              <li>SHIPPING & DELIVERY</li>
              <li>CARE GUIDE</li>
            </ul>
          </div>
          <div className='flex-col pt-2 md:pt-0'>
            <div className='pb-3'>NEWSLETTER</div>
            <div className='pb-2'>
              <input type='email' placeholder='ENTER YOUR EMAIL'></input>
            </div>
            <div>
              <button className='border border-white'>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div>
          <p className='pt-7'>Copyright 2024 © Pangaea. All Rights Reserved.</p>
        </div>
        <div className='pt-7 text-center text-7xl md:text-9xl'>PANGAEA.</div>
      </div>
    </footer>
  );
}

export default Footer;
