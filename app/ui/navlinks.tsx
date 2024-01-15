'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const links = [
    {name: "Lender View", href: "/lender", icon: "icon" },
    {name: "About Us", href: "/about", icon: "icon"},
    {name: "How It Works", href: "/how-it-works", icon: "icon"}
]

export default function NavLinks({className} : {className: string}){
    const pathname  = usePathname()
    return(
        <div className="">
            {links.map( link => {
            return (
                <Link 
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        "flex h-[48px] grow gap-2 rounded-md bg-gray-50 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                        {
                          'bg-sky-100 text-blue-600' : pathname === link.href,
                        },
                    className)}
                >
                    <p>{link.name}</p>
                </Link>
            )})}
        </div>
    )
}