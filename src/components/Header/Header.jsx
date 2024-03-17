import { PiMagnifyingGlassLight } from "react-icons/pi";
import { PiUserCircleLight } from "react-icons/pi";
const Header = () => {
  return (
    <div className="mt-5">
        <div className="flex justify-between items-center">
            <h3 className="ml-20 text-xl font-medium">Recipe Calories</h3>
            <div>
                <ul className="flex gap-6 text-[#150B2BB2]">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div>
                <div className="mr-20 flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-3xl border-2 p-2">
                    <PiMagnifyingGlassLight />
                    <p className="text-[#150B2BB2]">Search</p>
                    <input className="bg-transparent" type="text"/>




                    
                    
                    



                    </div>
                    <div className="rounded-full border-4 border-[#0BE58A] bg-[#0BE58A]">
                        <div className="text-3xl">
                            <PiUserCircleLight />
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default Header