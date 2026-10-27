import React from 'react';

const NavbarTitle = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-3 w-[90%] text-black m-auto p-4' >
                <div className='md:ml-10 font-bold text-center md:text-left'>
                    CS-Ticket System
                </div>

                <div className='flex flex-wrap justify-center gap-x-5 gap-y-2 md:gap-x-14 font-semibold'>
                    <div>Home</div>
                    <div>FAQ</div>
                    <div>Catelog</div>
                    <div>Blog</div>
                    <div>Download</div>
                </div>
            </div>
        </>
    );
};

export default NavbarTitle;