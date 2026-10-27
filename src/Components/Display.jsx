import React from 'react';
import Vector1 from "../assets/vector1.png";
import Vector2 from "../assets/vector2.png";

const Display = ({ count, count2 }) => {
    return (
        <>
            <div className='w-[95%] m-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-12'>
                    <div className='relative '>
                        <img className='rounded-[10px] bg-[#422AD5] w-full h-40 sm:h-80 object-cover' src={Vector1} alt="Vector illustration" />
                        <div className='absolute text-3xl top-0 w-full flex justify-center items-center flex-col text-white h-full '>
                            <div className='font-semibold text-[20px]'>In-Progress</div>
                            <div className='font-bold'>{count}</div>
                        </div>
                    </div>
                    <div className='relative '>
                        <img className='rounded-[10px] bg-[#34C759] w-full h-40 sm:h-80 object-cover' src={Vector2} alt="Vector illustration" />
                        <div className='absolute text-3xl top-0 w-full flex justify-center items-center flex-col text-white h-full '>
                            <div className='font-semibold text-[20px]'>Resolved</div>
                            <div className='font-bold'>{count2}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Display;