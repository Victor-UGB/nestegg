import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export default function PryButton({children, className, ...rest }: ButtonProps ){
    return(
        <button
            {...rest}
            className={clsx("flex p-2 items-center text-sm justify-center pry-gradient  rounded-full font-bold text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50", className,)}
        >
            {children}
        </button>
    )
}