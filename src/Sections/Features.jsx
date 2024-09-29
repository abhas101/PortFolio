import React from 'react'
import { Check, Rocket } from 'lucide-react'
import saasImg from '../assets/images/dark-saas-landing-page.png'
import saas2 from '../assets/images/light-saas-landing-page.png'

const Features = () => {
    return (
        <div className='featuresWrapper relative  flex items-center justify-center'>


            <div className="container mt-10 ">
                <div className="Text flex flex-col items-center gap-5">

                    <span className='text-2xl font-inter  uppercase text-transparent bg-gradient-to-r from-emerald-200 to-emerald-300 bg-clip-text'>Real-world Results</span>
                    <span className='font-inter text-5xl mt-10'>Featured Projects</span>
                    <p className='tracking-tighter text-xl text-center mt-5'>See how I transforemd concepts into engaging digital experiences.</p>

                </div>
                {/* projects */}
                {/* card wareapper */}
                <div className="cardWrapper p-5">
                    {/* all card aread actual area */}
                    <div className="cardArea">
                        {/* =============card 1 start========== */}
                        <div className="singleCard border p-5 pb-0 rounded-2xl  border-white/15   bg-white/10 backdrop-blur  md:flex md:justify-between md:pr-0 shadow-lg sticky top-16">

                            {/* card info */}
                            <div className="info">

                                <span className='block font-inter  uppercase text-transparent bg-gradient-to-r from-emerald-200 to-emerald-300 bg-clip-text'>Acme Group . 2022</span>
                                <span className=' block mt-2 text-2xl uppercase'>Dark SAAS LANDING PAGE</span>
                                <div className="info flex gap-2 items-center mt-5">
                                    <span className='inline-flex'><Check /></span>
                                    <p className='text-white/60'>Enhance user experience by 40%</p>
                                </div>
                                <div className="info flex gap-2 items-center mt-5">
                                    <span className='inline-flex'><Check /></span>
                                    <p className='text-white/60'>Improved site spped by 50%</p>
                                </div>
                                <div className="info flex gap-2 items-center mt-5">
                                    <span className='inline-flex'><Check /></span>
                                    <p className='text-white/60'>Increased mobile traffic  by 40%</p>
                                </div>
                                {/* button */}
                                <div className="button mt-5">

                                    <a href="#" className='border flex justify-center gap-2 py-2 text-center bg-white text-black rounded-xl font-medium hover:bg-white/60 transition items-center'>Visit Live site <span className='inline-flex items-center'><Rocket /></span></a>


                                </div>


                            </div>
                            {/* card image */}
                            <div className="image mt-10">
                                <img src={saasImg} alt="saas" />

                            </div>


                        </div>
                        {/* =========card 1 end========== */}


                        {/* =============card 2 start========== */}
                        <div className="singleCard border p-5 pb-0 rounded-2xl  border-white/15   bg-white/10 backdrop-blur mt-10 md:flex md:justify-between md:pr-0 shadow-lg sticky top-24 ">

                            {/* card info */}
                            <div className="info">

                                <span className='block font-inter  uppercase text-transparent bg-gradient-to-r from-emerald-200 to-emerald-300 bg-clip-text'>Acme Group . 2022</span>
                                <span className=' block mt-2 text-2xl uppercase'>Light SAAS LANDING PAGE</span>
                                <div className="info flex gap-2 items-center mt-5">
                                    <span className='inline-flex'><Check /></span>
                                    <p className='text-white/60'>Boost sales by 20%</p>
                                </div>
                                <div className="info flex gap-2 items-center mt-5">
                                    <span className='inline-flex'><Check /></span>
                                    <p className='text-white/60'>Expand customer reach by 35%</p>
                                </div>
                                <div className="info flex gap-2 items-center mt-5">
                                    <span className='inline-flex'><Check /></span>
                                    <p className='text-white/60'>Increased Brand awareness by 15%</p>
                                </div>
                                {/* button */}
                                <div className="button flex items-center justify-center mt-5">

                                    <a href="#" className='border flex justify-center gap-2 flex-1 py-2 text-center bg-white text-black rounded-xl font-medium hover:bg-white/60 transition items-center'>Visit Live site <span className='inline-flex items-center'><Rocket /></span></a>


                                </div>


                            </div>
                            {/* card image */}
                            <div className="image mt-10">
                                <img src={saas2} alt="saas" />

                            </div>


                        </div>
                        {/* =========card 2 end========== */}


                        {/* =============card 3 start========== */}
                        <div className="singleCard border p-5 pb-0 rounded-2xl  border-white/15   bg-white/10 backdrop-blur mt-10 md:flex md:justify-between md:pr-0  shadow-lg sticky top-26">

                            {/* card info */}
                            <div className="info">

                                <span className='block font-inter  uppercase text-transparent bg-gradient-to-r from-emerald-200 to-emerald-300 bg-clip-text'>Acme Group . 2022</span>
                                <span className=' block mt-2 text-2xl uppercase'>Dark SAAS LANDING PAGE</span>
                                <div className="info flex gap-2 items-center mt-5">
                                    <span className='inline-flex'><Check /></span>
                                    <p className='text-white/60'>Enhance user experience by 40%</p>
                                </div>
                                <div className="info flex gap-2 items-center mt-5">
                                    <span className='inline-flex'><Check /></span>
                                    <p className='text-white/60'>Improved site spped by 50%</p>
                                </div>
                                <div className="info flex gap-2 items-center mt-5">
                                    <span className='inline-flex'><Check /></span>
                                    <p className='text-white/60'>Increased mobile traffic  by 40%</p>
                                </div>
                                {/* button */}
                                <div className="button flex items-center justify-center mt-5">

                                    <a href="#" className='border flex justify-center gap-2 flex-1 py-2 text-center bg-white text-black rounded-xl font-medium hover:bg-white/60 transition items-center'>Visit Live site <span className='inline-flex items-center'><Rocket /></span></a>


                                </div>


                            </div>
                            {/* card image */}
                            <div className="image mt-10">
                                <img src={saasImg} alt="saas" />

                            </div>


                        </div>
                        {/* =========card 3 end========== */}

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Features