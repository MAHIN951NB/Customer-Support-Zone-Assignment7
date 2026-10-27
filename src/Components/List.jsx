import React from 'react';
import DisplayList from './DisplayList';
import { use } from 'react';
import Report from './Report';
import { useState } from 'react';
import Resolve from './Resolve';
import { toast } from 'react-toastify';

const List = ({ data, count, setCount, setCount2, count2 }) => {
    const [title, setTitle] = useState([])
    const [solve, setSolve] = useState([])

    const rawdata = use(data)

    const Pop = (passdata) => {
        const check = title.includes(passdata)
        if (!check) {
            const raw = [...title,passdata]
            setTitle(raw)
            const x = count + 1
            setCount(x)
        }
        else{
            toast('Cant Add Duplicate')
        }
    }
    const Solved = (items) => {
        const data = [...solve, items]
        //  console.log(items)
        // console.log(data)
        setSolve(data)
        const x = count - 1
        setCount(x)
        const y = count2 + 1
        setCount2(y)

        const remove = title.filter(dlete => dlete.title !== items.title);
        setTitle(remove)
        toast(`Resolved ${items.title}`)
    }
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-[3fr_1fr]  w-[95%] m-auto gap-x-3 mt-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 m-auto mb-10'>
                    {rawdata.map(list => <DisplayList list={list} setCount={setCount} count={count} Pop={Pop}></DisplayList>)}
                </div>
                <div>
                    <div>
                        <div className='font-bold text-2xl mb-4 text-black'>Task Status</div>
                        {title.map(items => <Report Solved={Solved} items={items}></Report>)}
                    </div>
                    <div className='mt-14'>
                        <div className='font-bold text-2xl mb-4  text-black'>Resolve Task</div>
                        {solve.map(solve => <Resolve solve={solve}></Resolve>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default List;