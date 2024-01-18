import { ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { CheckIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

interface SecNavProps {
    children: React.ReactNode
}

export default function SecNavbar({children} : SecNavProps){

    const [isDisplayed, setIsDisplayed] = useState(true) 

    const closeSecNav = () => {
        setIsDisplayed(!isDisplayed)
    }

    return(
        <div className={ isDisplayed?  "w-full flex justify-between text-xs p-2 px-4 text-white pry-gradient font-semibold" 
        : "hidden" 
        }>
            {/* <div>Second navbar</div> */}
            <div>
                <XMarkIcon className="w-4 " onClick={closeSecNav}/>
            </div>
            {children}
           <div>
                <CheckIcon className="w-4"/>
           </div>
        </div>
    )
}