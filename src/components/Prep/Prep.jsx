import React from 'react'
import { CiHospital1 } from 'react-icons/ci'


const Prep = ({prep}) => {
  return (
    <div>
        <h2 className='text-center font-medium text-2xl'>Currently Cooking: {prep.length}</h2>
        <hr />
        <div className='flex justify-evenly ml-16 pt-4'>
            <p className='text-[#878787]'>Name</p>
            <p className='text-[#878787]'>Time</p>
            <p className='text-[#878787]'>Calories</p>

  
        </div>
        {
            prep.map(prep => <div><div className='flex justify-between py-3 items-center'>
            <p className='text-[#878787]'>{prep.id}</p>
          
            <h3 className='text-[#878787]'>{prep.title}</h3>
            
            <h3 className='text-[#878787]'>{prep.minutes}</h3>
            <h3 className='text-[#878787]'>{prep.calories}</h3>
            <button className='bg-transparent rounded-3xl p-2'></button>
   
            
   
        </div>  </div>)
        }
        <div className='flex gap-5 justify-end pt-10'>

        <div>
           <h1>Total Time=<br /></h1>

            {
                prep.reduce((total,food)=>total+food.minutes,0)
            }
            
        </div>
        <div>

            <h1>Total Calories=<br /></h1>

            {
                prep.reduce((total,food)=>total+food.calories,0)
            }
        </div>

        </div>
      
    </div>
  )
}

export default Prep