import { useState } from "react";
import NavLinks from "./navlinks";
import clsx from "clsx";
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";

export default function HamburgerMenu(){
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return(
        <div className="lg:hidden bg-transparent">
            <div className={isOpen? "" : "p-2 "} onClick={toggleMenu}><Bars3Icon className="w-8 z-20 text-[#09BEF2] "/></div>
            <div id="burger-nav" 
            className={`block p-4 bg-[#09bef2] absolute left-0 top-0 w-5/6 h-100dvh
                ${isOpen? "animate-slide-right" 
                : "animate-slide-out-left opacity-0 pointer-events-none"
                }`}
            >
                <div className="bg-[#09bef2] absolute top-0 -right-60 -z-10 bg-opacity-20 h-full w-full "></div>
                <div className="w-full text-white">
                    {/* <div className="flex justify-end text-[#09BEF2] mb-8"><XMarkIcon className="w-8" onClick={toggleMenu}/></div> */}
                    <div className="w-full mt-14 border-t bg-transparent">
                        <NavLinks 
                            className={"bg-transparent text-[#ffffff] text-left justify-start text-2xl rounded-none my-6 font-bold"}
                        />
                    </div>
                </div>
                <div className="w-1/5 bottom-4 absolute">
                    <Image
                        src="/nestegglogoblu-bg.png"
                        width={1000}
                        height={180}
                        alt={"Nestegg logo"}
                        className="rounded"
                    />
                </div>
           </div>
        </div>
    )
}