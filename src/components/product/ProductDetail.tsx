import React from "react";

function ProductDetail() {
  return (
    <section className='px-4 sm:sm:col-span-4'>
      <div>
        <h3>Mens Recycled Cashmere Cardigan - Black</h3>
        <h3 className='my-4 text-gray-500'>$275</h3>
      </div>
      <ul className='my-4 flex border-b-2'>
        <li className='m-2'>
          <a href=''>Womens</a>
        </li>
        <li className='m-2'>
          <a href=''>Mens</a>
        </li>
      </ul>
      <div className='mt-7 flex flex-col gap-y-2'>
        <span>Color</span>
        <div>
          <button className='mx-1 my-4 rounded-full border-2 border-black bg-white px-4 py-4'></button>
          <button className='mx-1 my-4 rounded-full border-2 border-white bg-black px-4 py-4'></button>
        </div>
      </div>
      <div className='mt-7 flex w-full flex-col gap-y-4 overflow-x-hidden'>
        <span>Size</span>
        <div className='flex flex-wrap gap-2'>
          <button className='btn-black h-12 w-12'>XXS</button>
          <button className='btn-black h-12 w-12'>XS</button>
          <button className='btn-black h-12 w-12'>S</button>
          <button className='btn-black h-12 w-12'>M</button>
          <button className='btn-black h-12 w-12'>L</button>
          <button className='btn-black h-12 w-12'>XL</button>
          <button className='btn-black h-12 w-12'>XXL</button>
        </div>
      </div>
      <div className='mt-7'>
        <span>Description</span>
        <p className='text-gray-500'>
          <small>
            WRAP YOURSELF IN WARMTH WITH THE PANGAIA RECYCLED CASHMERE CARDIGAN. MADE FROM A
            LUXURIOUS BLEND OF RECYCLED CASHMERE, THIS CARDIGAN OFFERS SOFTNESS AND DURABLENESS IN
            ONE ELEGANT PIECE.
          </small>
        </p>
      </div>
      <div className='mt-7 flex justify-center'>
        <button type='button' className='btn-black w-full'>
          ADD TO BAG
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;
//mb-2 me-2 w-full rounded-full bg-blue-700 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
