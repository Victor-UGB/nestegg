import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
}

export default function SecButton({children, className, ...rest } : ButtonProps){
    return(
        <button 
            {...rest}
            className={clsx("flex items-center justify-center text-sm border rounded-full border-[#005AAB] p-3 font-semibold text-[#005AAB] transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50", className,)}
        >
            {children}
        </button>
    )
}