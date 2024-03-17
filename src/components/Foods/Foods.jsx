import { useEffect, useState } from "react";
import Food from "../Food/Food"
import PropTypes from 'prop-types';

  

const Foods = ({handleAddToCook}) => {
    const [foods,setFoods] = useState([])

    useEffect(() => {
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFoods(data))
        
    },[])


  return (
    <div className='w-3/5 ml-20 grid grid-cols-3 gap-3'>
        
        {
            
            foods.map(food => <Food
                 key={food.id} 
                 food={food}
                 handleAddToCook={handleAddToCook}
                 ></Food>)
        }
       
       
       
       
    </div>
  )
}

Foods.propTypes = {
    handleAddToCook: PropTypes.func
}

export default Foods