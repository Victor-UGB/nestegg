'use client'

import Image from 'next/image'
import PryButton from './ui/prybutton'
import Card1 from './ui/card1'
import Pill1 from './ui/pill1'
import { ArrowLongRightIcon, ArrowUpRightIcon, MagnifyingGlassIcon, BanknotesIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { InformationCircleIcon  } from '@heroicons/react/24/solid'
import SecButton from './ui/secbutton'
import Footer from './ui/footer/footer'
import LoanExplorer from './ui/loanexplorer'
import { useEffect, useState } from 'react'
import Card2 from './ui/card2'


export default function Home() {
  
  let [activeCard, setActiveCard] = useState(1) 
  const [cardPositions, setCardPositions] = useState([0, 0, 0])
  const [showAnimation, setShowAnimation] = useState(false)
  // let cardContainer = document.getElementById("card-container")
  let scrollCardsInterval:any | null = null
  const startScrolling = () => {
    scrollCardsInterval = setInterval( scrollCards, 5000)
  }


  // useEffect( () => {
  //   setTimeout( () => setShowAnimation(true), 5000)

  //   // startScrolling();

  //   return () => {clearInterval(scrollCardsInterval)}
  // }, [showAnimation])

  const scrollCards = () => {
    setCardPositions((prevPositions) => 
      prevPositions.map((pos, index) => {

        // Get the value of the new posititon 
         const newPos = index === 0 ? 200 : pos - 100;
         console.log(newPos)

        //  If the new position's value is 
         return newPos <= -300 ? 200 : newPos;   
      })
    )
    // console.log(cardPositions)
    if ( showAnimation ) {
      requestAnimationFrame(scrollCards)
    }
  };

  // useEffect( () =>  {
  //   if( !showAnimation ) {
  //     return
  //   }
  //   console.log("show animation activated")
  //   startScrolling();

  //   return () => clearInterval(scrollCardsInterval)
  //   requestAnimationFrame(scrollCards)
  //   // console.log(cardPositions)
  //  }, [showAnimation]
  // );

  useEffect( () => {
    if ( typeof window !== 'undefined' ) {
      const timer = setInterval(() => {
        setActiveCard((prevCount) => (prevCount % 3) + 1)
      }, 5000);
      return () => clearInterval(timer)
    }
    }, [])

  const cards = [
    {
      id: 1,
      icon: "",
      title: "Explore Loans",
      subtitle: "Quickly explore affordable loans from responsible lenders across UK.",
      icon2: <InformationCircleIcon className='w-6 '/>,
      className: "min-w-72 bg-opacity-10 pb-4 text-[#4e4e4e]"
    },
    {
      id: 2,
      icon: "",
      title: "Improve Chances",
      subtitle: "Check your chances & get personalised tips to improve them.",
      icon2: <InformationCircleIcon className='w-6'/>,
      className: " min-w-64 bg-opacity-5 text-[#4e4e4e]"
    },
    {
      id:3,
      icon: <MagnifyingGlassIcon className='w-6'/>,
      title: "Apply",
      subtitle: "Apply with confidence (or save for later).",
      icon2: <InformationCircleIcon className='w-6'/>,
      className: " min-w-64 bg-opacity-5 text-[#4e4e4e]"
    }
  ]

  return (
    <main className='md:hidden'>
      <div className='p-4 mb-6'>
        <div className=' mt-16 pb-6 mr-8 border-b'>
          <div className=' font-medium border-gradient text-[#4e4e4e] mx-1 rounded-full mb-4  w-fit pr-4 text-xs border px-6 py-2 relative'>Hassle-free loans</div>
          {/* <Pill1 icon={<ArrowUpRightIcon className='w-5'/>} title={`Step ${activeCard}/3`}/> */}
          <div className=' font-bold border-gradient text-[#2e2e2e] pr-4 text-3xl relative mb-4'>Get an affordable loan in <span className=' border-gradient border-b text-[#005AAB] border-blue-300 font-light'>3 easy steps.</span></div>
          
          <div className='text-[#4e4e4e] pb-2  text-sm font-normal'>
            At Nestegg we’re on a mission to open up access to affordable credit from responsible lenders.
          </div>

          <div className='gap-3 flex my-1 mr-10'>
            <PryButton className= " text-xs mt-2 w-full basis-3/5"> Get Started <ArrowLongRightIcon className='pl-2 w-8'/> </PryButton>
            <SecButton className='text-xs w-full mt-2 basis-2/5'>How it Works</SecButton>
          </div>
        </div>
        <div className='pt-2'>
          {/* <Pill1 icon={<ArrowUpRightIcon className='w-5'/>} title={`Step ${activeCard}/3`}/> */}
          <div className='card-container pt-4 py-2 flex overflow-scroll w-full gap-2'>
            { cards.map( (card, index) => (
                <Card1
                key={index}
                className={`hero-card ${activeCard == card.id? "scale-100 transition" : "scale-90 transition"} ${card.className}`}
                icon={`Step ${card.id}`}
                title= {card.title}
                subtitle={card.subtitle}
                icon2= {""}
                position={cardPositions[index]}
              />
            ))
              
            }
          </div>
        </div>
      </div>

      <div className='pry-gradient pt-16 pb-10 px-4'>
        <div className='py-3 pr-6 text-3xl text-white font-bold'>Tailored Loan Solutions with NestEgg.</div>
        <Card2
          key={0}
          className={`text-white py-4`}
          icon={""}
          title= {" Over £90,000,000 Saved for Clients (as of May 2023)"}
          subtitle={""}
          img= {"/seth-reese-GJ92T3mRTEY-unsplash.jpg"}
          cta={"Get Started"}
        />

        <div className='flex justify-center gap-4 mt-3'>
          <div className='bg-white rounded-full p-1'>
            <ChevronLeftIcon className='w-5' />
          </div>
          <div className='bg-white rounded-full p-1'>
            <ChevronRightIcon className='w-5'/>
          </div>
        </div>
      </div>

      <div className='bg-[white] p-4'>
        <div className='my-10'>

          <div className='py-3 pr-6 text-3xl text-[#2e2e2e] font-bold'>
            Financial Supports Using Thorough Analysis
          </div>
          
          <div className=' mt-6'>
            <div className=' my-4 py-4 text-left p-4 border rounded'>
              <div className='my-2'>
                <BanknotesIcon className='w-6'/>
              </div>
              {/* <div className='text-base pry-color font-bold'>Over £90,000,000</div> */}
              <div className='font-bold pb-2 text-base text-[#4e4e4e]'>
                Saved for Clients (as of May 2023)
                {/* Opening up <br/> access  to affordable credit. */}
              </div>
              <div className='text-[#6e6e6e] text-sm pb-6 pt-1'>
                At Nestegg we’re on a mission to open up access to affordable credit from responsible lenders.
              </div>
              <SecButton className='border-none font-semibold p-0 '>More About Us <ArrowLongRightIcon className='pl-2 w-8'/></SecButton>
            </div>
            
          </div>
          <div className=' mt-6'>
            <div className=' my-4 py-4 text-left p-4 border rounded'>
              <div className='my-2'>
                <BanknotesIcon className='w-6'/>
              </div>
              {/* <div className='text-base pry-color font-bold'>Over £90,000,000</div> */}
              <div className='font-bold pb-2 text-base text-[#4e4e4e]'>
                Saved for Clients (as of May 2023)
                {/* Opening up <br/> access  to affordable credit. */}
              </div>
              <div className='text-[#6e6e6e] text-sm pb-6 pt-1'>
                At Nestegg we’re on a mission to open up access to affordable credit from responsible lenders.
              </div>
              <SecButton className='border-none font-semibold p-0 '>More About Us <ArrowLongRightIcon className='pl-2 w-8'/></SecButton>
            </div>
            
          </div>
        </div>
      </div>

      {/* <div className='p-8'>
        <LoanExplorer/>
      </div> */}
      
    </main>
  )
}
