function ProductCard() {
  return (
    <div className='relative bg-slate-50 p-2'>
      <div className='absolute right-0 top-0 flex h-16 w-16 items-center justify-center'>
        <button className='z-[1] mx-1 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-red-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-5 text-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
            />
          </svg>
        </button>
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
        <div className='p-1'>
          <p className=" text-lg">Mens 365 Heavyweight Hoodie</p>
          <div className='pt-2'>
            <span className='text-xl'>$185</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
