'use client'

import HamburgerMenu from "./hamburger";
import NavLinks from "./navlinks";
import clsx from "clsx";
import Image from "next/image";


export default function NavBar(){
    let menuDrawn = false 
    const drawMenu = () => {
        console.log("drawing menu")
        menuDrawn = !menuDrawn
        console.log(menuDrawn)
    }
    return(
        <div className=" text-white flex justify-between z-10 bg-[#fafafa] px-4 py-2 items-center fixed">
            <div className="w-2/6 mx-2">
                <div className="rounded-xl">
                <Image
                    src="/nestegglogo.png"
                    width={1000}
                    height={180}
                    alt={"Nestegg logo"}
                    className="rounded"
                />
                </div>
            </div>
            <div className="hidden lg:block">
                <NavLinks
                    className={"bg-transparent"}
                />
            </div>
            
            <div className=""> <HamburgerMenu/> </div>
            
        </div>
    )
}