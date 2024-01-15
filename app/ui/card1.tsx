import React from "react";

export default function Card1({icon, title, subtitle, icon2, className, position} : 
    {icon:React.ReactNode, title: string, subtitle: string, icon2: React.ReactNode, className: string, position: number}){
    return(
        <div 
            className={className} 
            style={{transform: `translateX(${position}%)`}}
        >
            <div className="py-2 relative">
                <div className="py-1 bg-gradient-to-br w-fit-top-10">{icon}</div>
                <div className="text-md font-bold text-[#1AC3F3] text-sm">{title}</div>
            </div>
            <div className="text-xs font-medium text-[#6e6e6e] pr-3">{subtitle}</div>
            <div className="py-2 flex justify-end">{icon2}</div>
        </div>
    )
}