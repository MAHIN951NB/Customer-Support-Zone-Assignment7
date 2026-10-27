import React from 'react';

const DisplayList = ({ list, Pop }) => {

    return (
        <>
            <div onClick={() => Pop(list)} className='bg-white p-2.5 rounded-[10px]'>
                <div className='flex justify-between'>
                    <div className='font-bold mr-2.5 text-black'>{list.title}</div>
                    <button
                        className={`rounded px-3 py-1 cursor-pointer ${list.status === 'Open' ? "bg-green-300" : "bg-orange-400"}`}
                    >
                        {list.status}
                    </button>
                </div>
                <div className='text-gray-500'>
                    {list.description}
                </div>
                <div className='flex justify-between flex-wrap p-2 gap-x-4'>
                    <div className='flex gap-x-10'>
                        <div>{`#${list.id}`}</div>
                        <div className={`font-bold  ${list.priority === 'High' ? "text-red-500" : "text-yellow-400"}`}>{list.priority}</div>
                    </div>
                    <div className='flex gap-x-5'>
                        <div className='text-gray-500'>{list.customer}</div>
                        <div className='text-gray-500'>{list.date}</div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DisplayList;