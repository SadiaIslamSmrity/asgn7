import React from "react";
import Status from "./status";
import { use, useState } from "react";
const Ticket = ({fetchPromise, setProgressCount,progressCount,taskStatus, setTaskStatus, setResolvedCount, resolvedCount}) => {
    const ticketData = use(fetchPromise);
    const [openStates, setOpenStates] = useState({});
    const toggleTicket = (id) => {
    setOpenStates((prev) => ({
        ...prev,
        [id]: !prev[id],
    }));
    };
   

    
    return (
        <div className='p-15 bg-gray-100 flex flex-row'>
        {/* tickets */}
        <div className='w-2/3'>
          <p className='font-semibold text-2xl p-3 text-gray-700'>Customer Tickets</p>
          {/* all tickets */}
          <div className='grid grid-cols-2 gap-3'>
            {/* individual */}
            { ticketData.map((ticket) => { return <div className=' bg-white p-4 shadow-xl'>
            <div className='flex flex-row justify-between'>
              <p>{ticket.issue}</p>
              <button onClick={()=>{
                alert("Task Added!")
                toggleTicket(ticket.ticket)
                setProgressCount(progressCount+1)
                setTaskStatus((prev) => [
                ...prev, // keep previous issues
                <div
                    key={ticket.ticket} // unique key
                    className="w-full p-2 flex flex-col">
                    <p className="font-semibold items-center text-center w-full ">{ticket.issue}</p>
                    <button onClick ={()=>{ 
                    alert("Task Completed")
                    setResolvedCount(resolvedCount+1)
                    }}className="bg-green-600 text-white p-2 w-full m-1 rounded">Complete</button>
                </div>,
                ]);
            }} className={`bg-green-200 p-2 rounded-full text-xs text-green-900' ${openStates[ticket.ticket] ? "bg-yellow-200" : "bg-green-200"}`
              }>
              {openStates[ticket.ticket] ? "In-progress" : "Open"}</button>
            </div>
            <p className='text-start text-xs text-gray-600 py-2'>{ticket.message}</p>
            <div className='flex flex-row justify-between py-2'>
              <div className='gap-2 flex flex-row'><p className='text-xs text-gray-600'>#<span>{ticket.ticket}</span></p> <p className='text-xs text-red-600'> <span>{ticket.priority}</span> PRIORITY</p></div>
              <div className='gap-2 flex flex-row'><p className='text-xs text-gray-600'>{ticket.name}</p> <p className='text-xs text-gray-600'><span>{ticket.date}</span></p></div>
            </div>
            </div>}) }
          </div>
        </div>
        {/* status */}
        <Status taskStatus={taskStatus}></Status>

      </div>
    );
};
export default Ticket;


// <span>🟢 </span>Open