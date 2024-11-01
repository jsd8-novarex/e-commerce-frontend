import React from "react";

function ProductDetail() {
  return (
    <section className='ml-2 sm:col-span-9 sm:col-start-9 sm:w-full'>
      <div>
        <h3>Mens Recycled Cashmere Cardigan - Black</h3>
        <span><h3 className='text-gray-500 my-4'>$275</h3></span>
      </div>

      <ul className='flex my-4 border-b-2'>
        <li className='m-2'><a href="">Womens</a></li>
        <li className='m-2'><a href="">Mens</a></li>
      </ul>

      <div className='flex flex-col mt-7'>
        <span>Color</span>
        <div className='mt-7'>
          <button className='bg-white border-2 border-black rounded-full px-4 py-4 mx-1 my-4'></button>
          <button className='bg-black border-2 border-white rounded-full px-4 py-4 mx-1 my-4'></button>
        </div>
      </div>

      <div className='mt-10'>
        <span>Size</span>
        <div className='flex overflow-x-auto space-x-4 py-2'>
            <button className='px-4 py-4'>XXS</button>
            <button className='px-4 py-4'>XS</button>
            <button className='px-4 py-4'>S</button>
            <button className='px-4 py-4'>M</button>
            <button className='px-4 py-4'>L</button>
            <button className='px-4 py-4'>XL</button>
            <button className='px-4 py-4'>XXL</button>
        </div>
      </div>

      <div className='mt-7'>
        <span>Description</span>
        <p className='text-gray-500'><small>WRAP YOURSELF IN WARMTH WITH THE PANGAIA RECYCLED CASHMERE CARDIGAN. MADE FROM A LUXURIOUS BLEND OF RECYCLED CASHMERE,
          THIS CARDIGAN OFFERS SOFTNESS AND DURABLENESS IN ONE ELEGANT PIECE.</small></p>
      </div>

      <div className='mt-7 flex justify-center'>
        <button type="button" className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm w-full py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>ADD TO BAG</button>
      </div>

    </section>
  );
}

export default ProductDetail;
// sm:col-start-8 sm:col-end-13
