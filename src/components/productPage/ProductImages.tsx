import React from "react";

function ProductImages() {
  return (
    <section className='col-start-1 col-end-4 sm:col-start-1 sm:col-end-9'>
      <div className='flex w-full snap-x snap-mandatory gap-1 overflow-y-auto overflow-x-scroll scroll-smooth sm:grid sm:w-full sm:grid-cols-2 sm:grid-rows-2 sm:gap-1 sm:overflow-x-hidden'>
        <div className='flex-0 0 100% relative grid min-w-full snap-start'>
          <div className='relative grid border-none'>
            <img
              className='w-100% block h-auto'
              src='https://pangaia.com/cdn/shop/files/Cashmere-Cardigan-Black-1.png?crop=center&height=1023&v=1727177408&width=768'
              alt='pic-top-left'
            />
          </div>
        </div>
        <div className='flex-0 0 100% relative grid min-w-full snap-start'>
          <img
            src='https://pangaia.com/cdn/shop/files/Cashmere-Cardigan-Black-Male-1.jpg?crop=center&height=1023&v=1727177408&width=768'
            alt='pic-top-right'
          />
        </div>
        <div className='flex-0 0 100% relative grid min-w-full snap-start'>
          <img
            src='https://pangaia.com/cdn/shop/files/Cashmere-Cardigan-Black-Male-2.jpg?crop=center&height=1023&v=1727177408&width=768'
            alt='pic-bottom-left'
          />
        </div>
        <div className='flex-0 0 100% relative grid min-w-full snap-start'>
          <img
            src='https://pangaia.com/cdn/shop/files/Cashmere-Cardigan-Black-2.jpg?crop=center&height=1023&v=1727177408&width=768'
            alt='pic-bottom-right'
          />
        </div>
      </div>
    </section>
  );
}

export default ProductImages;
