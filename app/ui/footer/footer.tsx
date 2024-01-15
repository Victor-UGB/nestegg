import NavBar from "../navbar";
import NavLinks from "../navlinks";
import FooterLinks from "./links-footer";
import Image from "next/image";
import SecButton from "../secbutton";
import PryButton from "../prybutton";

export default function Footer(){
    return(
        <div className="mt-16 relative bg-zinc-800">

            <div className="pt-16 pb-16 mx-8 border-b">
                <div className='py-3 text-3xl text-center text-white font-bold'>Make fairer, faster loan assessments</div>
                <div className='text-[#dfdfdf] pb-2 text-center text-sm font-normal'>
                    At Nestegg we’re on a mission to open up access to affordable credit from responsible lenders.
                </div>
                <SecButton className='text-xs w-full text-white border-white mt-2 basis-2/5'>Take Me There</SecButton>
            </div>
            <div className="">
                <div className="w-1/2 p-4 py-8 ">
                <Image
                    src="/nestegglogowhite.png"
                    width={1000}
                    height={180}
                    alt={"Nestegg logo"}
                    className="rounded"
                />
                </div>
                
                <FooterLinks/>
                <div className=" text-stone-50 p-4 py-12 text-xs border-t">
                    NestEgg Limited is regulated by the Financial Conduct Authority as a Provider of Credit Information Services and for Credit Broking 
                    (Firm Reference Number: 920630, Company number: 10427741). Registered address: Lynton House 7-12 Tavistock Square London WC1H 9BQ
                </div>
                <div className="absolute top-0 w-96 -left-48 opacity-10">
                    <Image
                        src="/nesteggtree.png"
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