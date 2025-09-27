import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Navbar.jsx";
import Display from './Display.jsx';
import Ticket from './Tickets.jsx';
import Footer from './Footer.jsx';
import { Suspense } from 'react';
import Status from './status.jsx';

const fetchTicketData = async() => {
  const res = await fetch("/ticketdata.json");
  return res.json();
};
const fetchPromise = fetchTicketData();
function App() {
  
  const [progressCount, setProgressCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)
  const [taskStatus, setTaskStatus] = useState([])

  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* display */}
      <Display progressCount={progressCount} resolvedCount={resolvedCount}></Display>

      {/* main */}
      <Suspense fallback={<div className='flex justify-center items-center h-ful w-screen'><span className="loading loading-spinner loading-xl"></span></div>}>
        <Ticket fetchPromise={fetchPromise} setProgressCount={setProgressCount} progressCount={progressCount} taskStatus={taskStatus} setTaskStatus={setTaskStatus} resolvedCount={resolvedCount} setResolvedCount={setResolvedCount}></Ticket>
      </Suspense>

      {/* footer */}
      <Footer></Footer>
    </>
  )
}

export default App
// style={{ backgroundImage: `url(${img1})`}}      <p className='text-white'>Resolved</p><span className='text-5xl text-white font-bold'>0</span>.      fallback={<span className="loading loading-spinner loading-xl"></span>}