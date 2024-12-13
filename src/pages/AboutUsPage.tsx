function AboutUsPage() {
  return (
    <div className='h-full w-full py-32'>
      {/* About Section */}
      <div className='mb-12 px-4 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>About Us</h2>
        <p className='text-lg text-gray-600'>
          We are a community-driven company focused on bringing artisans and human values together.
        </p>
      </div>

      <section className='grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-24'>
        {/* First Image and Text */}
        <div className='relative flex flex-col'>
          <img
            className='w-full'
            src='https://plus.unsplash.com/premium_photo-1674273913840-99e209d312fc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Artisans working'
          />
          <div className='absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50 p-6 text-left text-white'>
            <h3 className='text-lg font-semibold md:text-xl lg:text-3xl'>
              A house of artisans and human values
            </h3>
            <p className='mt-4 text-sm md:text-lg'>
              We are passionate about empowering artisans and promoting sustainable crafts. Our
              mission is to blend art with social impact.
            </p>
          </div>
        </div>

        {/* Second Image and Text */}
        <div className='relative flex items-center justify-center'>
          <img
            className='w-full'
            src='https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Supporting people'
          />
          <div className='absolute inset-0 flex flex-col justify-center bg-black bg-opacity-50 p-6 text-left text-white'>
            <h3 className='text-lg font-semibold md:text-xl lg:text-3xl'>
              Supporting People During Cold Weather
            </h3>
            <p className='mt-4 text-sm md:text-lg'>
              We provide support to people in need during harsh weather conditions, helping them
              stay safe and warm.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <div className='mt-16 px-4 text-center md:px-24'>
        <h2 className='mb-6 text-3xl font-bold'>Mission and Vision</h2>
        <p className='mb-4 text-lg text-gray-600'>
          Our mission is to empower artisans worldwide while fostering human values that uplift
          communities.
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
