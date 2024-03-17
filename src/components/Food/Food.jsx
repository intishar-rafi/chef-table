import PropTypes from 'prop-types';
import { CiClock2 } from 'react-icons/ci';
import { SlFire } from "react-icons/sl";


const Food = ({food, handleAddToCook}) => {
  
  const {title,cover,description,ingredients,minutes,calories} = food;

  return (

    
    <div className='p-3 border-2 rounded-xl'>
        
            <img className='rounded-xl'src={cover} alt="" />
            <h3 className='pt-4'>{title}</h3>
            <p className='text-[#878787] pt-4'>{description}</p>
            <p className='pt-4'>Ingredients:{ingredients.length}</p>
            <div className='pt-4'>
                <ul className='ml-4 text-[#878787]'>
                    <li>- {ingredients[0]}</li>
                    <li>- {ingredients[1]}</li>
                    <li>- {ingredients[2]}</li>
                    <li>- {ingredients[3]}</li>
                    <li>- {ingredients[4]}</li>
                    <li>- {ingredients[5]}</li>
                    
                </ul>
            </div>
            <div className='flex justify-between pt-4 text-[#878787]'>
                <div className='flex items-center'>
                    <CiClock2></CiClock2>
                    <p>{minutes} minutes</p>
                </div>

                <div className='flex items-center'>
                <SlFire />
                <p>{calories} Calories</p>
                </div>
            </div>
            <div className='pt-4'>

            <button 
            onClick={() => handleAddToCook(food)}
            className='bg-[#0BE58A] rounded-3xl p-3'>Want to Cook</button>
                
            </div>
            
            
       

      
         
    </div>
  )
}

Food.propTypes ={
    food: PropTypes.object.isRequired,
    handleAddToCook: PropTypes.func

}


export default Food