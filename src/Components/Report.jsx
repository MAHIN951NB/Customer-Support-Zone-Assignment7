import React from 'react';

const Report = ({ items, Solved }) => {
    return (
        <>
            <div className='bg-white p-2.5 rounded-[7px] mb-2'>
                <p className='font-bold'>{items.title}</p>
                <button  onClick={() => Solved(items)} className='bg-green-600 w-full text-white p-1'>Resolve</button>
            </div>
        </>
    );
};

export default Report;