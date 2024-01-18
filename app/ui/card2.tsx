import React from "react";
import SecButton from "./secbutton";
import Image from "next/image";

export default function Card2({icon, title, subtitle, img, className, cta} : 
    {icon:React.ReactNode, title: string, subtitle: string, img: string, className: string, cta: string}){
    return(
        <div 
            className={className} 
        >
            <div className="relative h-130">
                <div className="w-full h-full object-cover relative">
                    <Image
                        src = {img}
                        alt = {"card2img"}
                        height= {1000}
                        width = {1000}
                        // layout="intrinsic"
                        className = "rounded object-cover h-full -z-10"
                    />
                </div>
                <div className="absolute z-10 right-0 h-132 bg-black bg-opacity-1 top-0"></div>
                <div className="absolute bottom-1 p-2 animate-step-down2">
                    <div className="flex py-2">
                        {/* <div className="p-1 bg-gradient-to-br  from-[#9fe6ff] to-[#09BEF2]  w-fit">{icon}</div> */}
                        <div className="text-md font-bold py-3">{title}</div>
                    </div>
                    <div className="text-sm font-medium pr-3">{subtitle}</div>
                    <div className="py-2 flex justify-start"><SecButton className="border-white text-white">{cta}</SecButton></div>
                </div>
            </div>
        </div>
    )
}