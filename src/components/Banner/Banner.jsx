import React from 'react'

const Banner = () => {
  return (

    <div className='ml-20 mr-20 pt-10'>
        <div className='rounded-3xl bg-[url("https://i.ibb.co/jh9jwHW/banner.png")] bg-no-repeat'>
            <h1 className='text-[40px] text-white pt-48 text-center'>Discover an exceptional cooking class tailored for you!</h1>
            <p className='text-white pt-5 text-center'>Unlock the Secrets of Culinary Mastery with Our Personalized, Expert-Led Cooking Classes Tailored to Your Skill Level and Tastes</p>
            <div className='flex gap-8 justify-center pt-6 pb-20'>
                <button className='rounded-full bg-[#0BE58A] p-5'>Explore Now</button>
                <button className='rounded-full p-5 text-white bg-slate-100 bg-opacity-5 border-2'>Our Feedback</button>
    
            </div>


        </div>

        
        
        
    </div>
  )
}

export default Banner