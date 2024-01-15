import clsx from "clsx"
import Link from "next/link"

const footerLinks = [
    {
        title: "Company",
        links: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Jobs",
                link: "/jobs"
            },
        ]
    },
    {
        title: "Resources",
        links: [
            {
                name: "How it works",
                link: "/about"
            },
            {
                name: "Money tips",
                link: "/about"
            },
            {
                name: "Privacy",
                link: "/about"
            },
            {
                name: "Terms of use",
                link: "/about"
            },
        ]
    },
    {
        title: "Partner with us",
        links: [
            {
                name: "Lenders",
                link: "/about"
            },
            {
                name: "Building societies",
                link: "/about"
            },
            {
                name: "Business blog",
                link: "/about"
            },
        ]
    }
]

export default function FooterLinks(){
    return(
        <div>
            <div className="px-4">
                {footerLinks. map( footerLink => (
                    <div 
                        key={footerLink.title}
                        className="py-5"
                    >
                        <div className="font-bold text-white">{footerLink.title}</div>
                        {footerLink.links.map(link => (
                            <Link
                            key={link.name}
                            href={link.link}
                            className={clsx(
                                "flex h-[48px] grow items-center gap-2 rounded-md  text-white text-xs font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                                // 
                            )}
                            > {link.name} </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}