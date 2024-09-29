import React from 'react'
import memojiImg from '../assets/images/memoji-computer.png'
import arrowdown from '../assets/icons/arrow-down.svg'
import { ArrowBigDown, HandMetal, StarIcon } from 'lucide-react'
import grainImage from '../assets/images/grain.jpg'
import starIcon from '../assets/icons/star.svg'
import heart from '../assets/icons/heartGif.gif'
import email from '../assets/icons/emailGif.gif'
const Hero = () => {
    return (
        <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black,transparent)]  flex flex-col items-center'>

            {/* grain image is abosulute and inline */}

            <div className='absolute inset-0 -z-30 opacity-5'
                style={{
                    backgroundImage: `url(${grainImage})`,
                }}></div>


            {/* ring */}

            <div className="absolute inset-0 size-[620px]  border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="absolute inset-0 size-[820px]  border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="absolute inset-0 size-[1020px]  border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="absolute inset-0 size-[1220px]  border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="absolute inset-0 size-[1420px]  border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>


            {/* <StarIcon className='size-28 text-emerald-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute border-red-50'/> */}


            {/* container */}

            <div className='container  '>


                {/* banner */}

                <div className='flex flex-col items-center justify-center   '>
                    <img src={memojiImg} alt="person peeking from behind from a laptop" className='size-[100px]' />
                    <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-5  font-medium rounded-full'>
                        <div className='bg-green-600 size-1.5 rounded-full'></div>
                        <div className='font-sm'>Available for new projects</div>
                    </div>
                </div>


                {/* title */}
                <div className='max-w-lg mx-auto'>



                    <h1 className='font-serif text-3xl text-center mt-8 md:text-5xl'>Building Exceptional User Experience</h1>
                    <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize in transforming designs into functional, high-performing web application. Let's disucss your next project.</p>

                </div>
                {/* buttons 
             */}
                <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
                    <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
                        <span className='font-semibold'>Explore my work</span>
                        <ArrowBigDown /> 
                    </button>

                    <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl'>
                        {/* <HandMetal /> */}
                        <img src={email} alt="" className='size-10' />
                        <span className='font-semibold'>Let's connect</span>
                    </button>
                </div>





            </div>


        </div>
    )
}

export default Hero