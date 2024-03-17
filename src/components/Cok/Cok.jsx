import PropTypes from 'prop-types';


const Cok = ({cook,handleAddToPrep}) => {
     const {title,minutes,calories,id} = cook;
     
   return (
     <div className='flex justify-between py-3 items-center'>
         <p className='text-[#878787]'>{id}</p>
       
         <h3 className='text-[#878787]'>{title}</h3>
         
         <h3 className='text-[#878787]'>{minutes}</h3>
         <h3 className='text-[#878787]'>{calories}</h3>

         <button onClick={()=>{
          handleAddToPrep(cook)
         }}
         className='bg-[#0BE58A] rounded-3xl p-2'>Preparing</button>

     </div>  
   )
}


Cok.propTypes ={
   cook: PropTypes.object
}
export default Cok