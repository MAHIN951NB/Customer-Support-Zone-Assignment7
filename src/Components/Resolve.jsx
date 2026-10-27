import React from 'react';

const Resolve = ({solve}) => {
    return (
        <>
          <p className='font-bold bg-blue-400 p-2 rounded-[7px] mb-2'>{`Resolverd ${solve.title}`}</p>
        </>
    );
};

export default Resolve;