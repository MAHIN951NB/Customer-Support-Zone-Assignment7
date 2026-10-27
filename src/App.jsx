import { useState } from 'react'
import './App.css'
import NavbarTitle from './Components/NavbarTitle';
import Display from './Components/Display';
import React from 'react';
import { Suspense } from 'react';
import List from './Components/List';
import About from './Components/About';
import { ToastContainer} from 'react-toastify';

const Api = async () => {
  const Data = await fetch('./Tickets.json')
  const newdata = Data.json()
  return newdata
}
const data = Api()



const App = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <div className='bg-white'><NavbarTitle></NavbarTitle></div>
      <div className='bg-[#EAEAEA] '>
        <Display count={count} count2={count2}></Display>
        <Suspense fallback={<h1 className='font-bold text-2xl'>...LOADING</h1>} >
          <List count2={count2} setCount2={setCount2} count={count} setCount={setCount} data={data}></List>
        </Suspense>
        <About></About>
      </div>
      <ToastContainer />
    </>
  );
};


export default App
