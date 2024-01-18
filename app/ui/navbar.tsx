'use client'

import HamburgerMenu from "./hamburger";
import NavLinks from "./navlinks";
import clsx from "clsx";
import Image from "next/image";
import SecNavbar from "./navbar/secnavbar";
import Link from "next/link";

export default function NavBar(){
    let menuDrawn = false 
    const drawMenu = () => {
        console.log("drawing menu")
        menuDrawn = !menuDrawn
        console.log(menuDrawn)
    }
    return(
        <div className="fixed z-40">
             <SecNavbar>
                <Link
                    href={"#"}
                >
                    Are You A lender?
                </Link>
            </SecNavbar>
            <div className=" text-white flex justify-between z-10 bg-[#fafafa] px-4 py-2 items-center ">
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
           
        </div>
    )
}