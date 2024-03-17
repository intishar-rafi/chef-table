import './App.css'
import Header from './components/Header/Header'
import Foods from './components/Foods/Foods'
import Cook from './components/Cook/Cook'
import { useState } from 'react'
import { toast } from 'react-toastify';
import Text from './components/Text/Text'
import Banner from './components/Banner/Banner'
import Prep from './components/Prep/Prep'

 


function App() {
  const [cooks, setCooks] = useState([]);
  const [prep, setPreps] = useState([]);

  const handleAddToPrep = food => {
    setCooks(cooks.filter(obj => obj.id!==food.id))
    setPreps([...prep,food])
  }

  const handleAddToCook = food => {
     const isExist = cooks.find(item =>item.id==food.id);
     if(!isExist) {
      const newCook = [...cooks, food]
      setCooks(newCook);

     }
     else{
      toast.error("already exist")
     }


     
  }
  

  return (
    <>   
      
      <Header></Header>
      <Banner></Banner>
      <Text></Text>

      <div className='flex justify-between gap-8 pt-20'>
        <Foods handleAddToCook={handleAddToCook}></Foods>
        <Cook cooks={cooks} prep={prep} handleAddToPrep={handleAddToPrep}></Cook>

        
         
        

      </div>
      
       
      
    </>
  )
}


export default App
