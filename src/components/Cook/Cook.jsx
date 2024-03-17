import PropTypes from 'prop-types'
import Cok from '../Cok/Cok'
import Prep from '../Prep/Prep'

const Cook = ({cooks,prep,handleAddToPrep}) => {
  return (
    <div className='w-2/5 p-6 border-2 rounded-xl'>
      <div>
        <h2 className='text-center font-medium text-2xl'>Want to Cook: {cooks.length}</h2>
        <hr />
        <div className='flex justify-evenly pt-4'>
            <p className='text-[#878787]'>Name</p>
            <p className='text-[#878787]'>Time</p>
            <p className='mr-10 text-[#878787]'>Calories</p>

  
        </div>
        {
            cooks.map(cook =><Cok key={cook.id} handleAddToPrep={handleAddToPrep} cook={cook}></Cok>)
            
        }
    </div>
    <div className='mt-36'>
      <Prep prep={prep}></Prep>
    </div>
    </div>
  )
}

Cook.propTypes = {
    cooks: PropTypes.array
}


export default Cook 