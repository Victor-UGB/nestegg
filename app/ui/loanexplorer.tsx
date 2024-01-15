'use client'

import { useState } from "react";
import Slider from "./slider";
import Pill1 from "./pill1";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PryButton from "./prybutton";

export default function LoanExplorer(){
    const [slider1Value, setSlider1Value] = useState(2000)
    const [slider2Value, setSlider2Value] = useState(4)
    const onSlider1Change = (value:number) => {
        setSlider1Value(value)
    }
    const onSlider2Change = (value:number) => {
        setSlider2Value(value)
    }

    return(
        <div className=" my-8 p-4 shadow-sm rounded">
            <div className="py-2">
            </div>
            <div className="py-8 font-bold text-sm text-center text-[#6e6e6e]">
                Check your chances & get personalised tips to improve them
            </div>
                <Pill1
                    icon={<MagnifyingGlassIcon className="w-5"/>}
                    title="Loan Explorer"
                />
            <div className="mt-3">
                <Slider
                    label={"Loan Amount"}
                    min={1000}
                    max={100000}
                    values={2000}
                    step={10}
                    info={"How much are you looking to lend?"}
                    valueLabel="amount"
                    // onChange={onSlider1Change}
                />
                
                <Slider
                    label={"Loan Duration"}
                    min={4}
                    max={48}
                    values={4}
                    step={2}
                    info={"How long will it take you to pay back?"}
                    valueLabel="month"
                    // onChange={onSlider2Change}
                />
            </div>
            <div>
                <PryButton className="mt-2 w-full"><MagnifyingGlassIcon className="w-5 mr-2"/> Search</PryButton>
            </div>
        </div>
    )
}