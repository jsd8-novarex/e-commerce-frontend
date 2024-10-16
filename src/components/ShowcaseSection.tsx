import React from "react";

function ShowcaseSection() {
  return (
    <section className='relative h-full w-full snap-center snap-always'>
      <img
        src='https://images.unsplash.com/photo-1726706265802-7c110dce774e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='https://unsplash.com/photos/a-woman-standing-in-front-of-a-tree-in-a-greenhouse-HoXhrlPnQAE'
        className='-z-10 h-full w-full'
      />
      <div className='absolute inset-0 z-0 h-full w-full bg-black/10' />
      <div className='absolute bottom-[12%] left-[5%] z-10 w-72 p-4 text-white sm:w-96 xl:w-[32rem]'>
        <p className='text-xl xl:text-2xl'>Casual Wear Collection</p>
        <p className='my-4 text-justify text-base'>
          Soft and comfortable long-sleeve top, Perfect for everyday wear and any casual occasion.
        </p>
        <span className='text-xl xl:text-3xl'>999THB</span>
      </div>
    </section>
  );
}

export default ShowcaseSection;
