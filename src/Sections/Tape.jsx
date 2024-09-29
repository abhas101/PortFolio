import React, { Fragment } from 'react'
import staricon from '../assets/icons/star.svg'
import { StarIcon } from 'lucide-react';

const words = ["Performant", "Accessible", "Secure", "Interactive", "Scalable", "User Friendly", "Maintainable", "Search Optimised", "Usable", "Reliable", "Animated", "Responsve", "Trending", "High Quality"];

const Tape = () => {
    return (
        <div className='py-16 -mx-1'>

            <div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 '>

                <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] items-center justify-center '>




                    <div className='words p-5 flex gap-4 flex-none pr-4 animate-move-left [animation-duration:30s]' >


                        {[...new Array(2)].fill(0).map((_, index) => (
                            <Fragment key={index}>
                                {words.map(word => (
                                    <div key={word} className='inline-flex  items-center '>
                                        <span className='text-gray-900  uppercase font-bold'>{word}</span>
                                        <StarIcon className='h-3 text-gray-900' />
                                    </div>
                                ))}
                            </Fragment>
                        ))}



                    </div>

                </div>


            </div>


        </div>



    )
}

export default Tape