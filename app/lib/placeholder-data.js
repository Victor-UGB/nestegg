import { InformationCircleIcon, MagnifyingGlassIcon  } from '@heroicons/react/24/solid'

const cards1 = [
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
  ];

  const cards2 = [
    {
      id: 1,
      icon: "",
      title: "Quickly explore affordable loans from responsible lenders across UK.",
      subtitle: "",
      img: "/seth-reese-GJ92T3mRTEY-unsplash.jpg",
      className: "min-w-72 bg-opacity-10 pb-4 text-[#4e4e4e]",
      cta: "Get Started"

    },
    {
      id: 2,
      icon: "",
      title: "Check your chances & get personalised tips to improve them.",
      subtitle: "",
      img: "/coffee.avif",
      className: " min-w-64 bg-opacity-5 text-[#4e4e4e]",
      cta: "Get Started"
    },
    {
      id:3,
      icon: <MagnifyingGlassIcon className='w-6'/>,
      title: "Apply with confidence (or save for later).",
      subtitle: "",
      img: "/house.avif",
      className: " min-w-64 bg-opacity-5 text-[#4e4e4e]",
      cta: "Get Started"
    }
  ];


  export {
    cards1,
    cards2
  };