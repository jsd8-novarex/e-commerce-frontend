function AboutUsPage() {
  return (
    <div className='h-full w-full py-32  '>
        <div className='flex flex-col items-center gap-3 md:px-48'>            
            <h2 className="font-bold">About us</h2>          
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, sapiente necessitatibus? Aliquam consequuntur reiciendis facere, suscipit nam rerum illum maiores numquam ducimus sit commodi laboriosam beatae voluptate nihil deleniti placeat.</p>          
        </div>
        <section className="flex flex-col items-center">
          <div className="flex m-10 w-4/5 items-center">
              <div className="w-1/2 px-3">
                <h3>A house of artisans and human values</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet esse possimus fugiat provident aspernatur quod, placeat ad, vitae aut nobis alias rem officiis harum hic, asperiores veritatis nam mollitia!</p>
              </div>
              <div className="w-1/2 m-5">
                <img src="https://plus.unsplash.com/premium_photo-1674273913840-99e209d312fc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Human values"/>
              </div>              
          </div>
          <div className="flex m-10 w-4/5 items-center">
              <div className="w-1/2 px-3 mr-3">
                <img src="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Supporting"/>
              </div>
              <div className="w-1/2 ">
                <h3>Supporting peoplen during cold weather</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet esse possimus fugiat provident aspernatur quod, placeat ad, vitae aut nobis alias rem officiis harum hic, asperiores veritatis nam mollitia!</p>
              </div>
          </div>
        </section>
        <div className='flex flex-col items-center gap-3 mt-6 md:px-48'>            
            <h2>Mission and Vision</h2>          
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, sapiente necessitatibus? Aliquam consequuntur reiciendis facere, suscipit nam rerum illum maiores numquam ducimus sit commodi laboriosam beatae voluptate nihil deleniti placeat.</p>          
        </div>            
    </div>
  )
}

export default AboutUsPage