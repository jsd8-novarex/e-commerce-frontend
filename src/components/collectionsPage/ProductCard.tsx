import React from "react";

function ProductCard() {
  return (
    <div className='relative bg-slate-50 p-2'>
      <div className='absolute right-0 top-0 flex h-16 w-16 items-center justify-center'>
        <button className='z-10 mx-1 h-12 w-12 rounded-full border-4 border-white bg-red-500' />
      </div>
      <div className='bg-white'>
        <img
          src='https://pangaia.com/cdn/shop/files/Recycled-Cotton-Hoodie-Black-1.png?crop=center&height=1023&v=1724674090&width=768'
          alt='Mens 365 Heavyweight Hoodie'
        />
      </div>
      <div>
        <div className='py-2'>
          <button className='h-8 w-8 rounded-full border-4 border-white bg-black' />
          <button className='h-8 w-8 rounded-full border-4 border-white bg-sky-500' />
          <button className='h-8 w-8 rounded-full border-4 border-white bg-slate-500' />
        </div>
        <div className='p-2'>
          <p>Mens 365 Heavyweight Hoodie</p>
          <div className='pt-2'>
            <span className='text-xl'>$185</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
