import { Range } from "react-range"
import * as React from 'react'
import { Component } from "react"

interface Props {
    label: string,
    info: string,
    step: number,
    min: number,
    max: number,
    values: number,
    valueLabel: string 
    // onChange: (value: number[]) => void
}

export default class Slider extends Component<Props> {
    state = {
        values: [this.props.values],
        translateXValue: -50
    }

    
    
    render(): React.ReactNode {   
        return(
            <>  
                <div className="flex w-full justify-between p-2">
                    <div className="text-xs py-2 font-extrabold text-[#6e6e6e]">
                        {this.props.label}
                    </div>
                    
                    <div className="font-bold bg-[#F1F6F7] px-3 py-1 text-sm rounded">
                        {this.props.valueLabel === "month"? this.state.values[0] + " months": "£" + this.state.values[0]}
                    </div>
                </div>
                <Range
                    step={this.props.step}
                    min = {this.props.min}
                    max = {this.props.max}
                    values={this.state.values}
                    onChange={(values) => { 
                        this.setState({values})
                    }}
                    renderTrack={({ props, children }) => (
                        <div className="bg-[#CEF1F6] rounded-xl py-3 px-3 ">
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '3px',
                                    width: '100%',
                                }}
                                className="bg-[#1597ED] rounded-md"
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({props}) => (
                        // <div 
                        //     {...props}
                        //     style={{
                        //         transform: `translateX(${this.state.translateXValue}%) !important`
                        //     }}
                        //     className="w-full h-2 bg-blue-300 flex justify-end -translate-x-1/2">
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '34px',
                                    width: '34px'
                                }}
                                className="rounded-full bg-[#005AAB] shadow-inner"
                            >

                            </div>
                        // </div>
                    )}
                />

                <div className="text-xs p-2 font-light py-3">
                    {this.props.info}
                </div>
            </>
        )
    }
}