import React from 'react';
const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center h-10  px-15 py-7'>
        <p className='text-2xl font-semibold'>CS-Ticket System</p>
        <div>
          <ul className='flex flex-row list-none gap-3 text-sm items-center'>
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
            <li><button className='bg-gradient-to-r from-purple-800 to-purple-400 p-2 rounded-sm text-white'>+ New Ticket</button></li>
          </ul>
        </div>
      </div>
    );
};
export default Navbar;


//  <button onClick={()=>{
//                 toggleTicket(ticket.ticket)
//                 setProgressCount(progressCount+1)
//                 setTaskStatus((prev) => [
//                 ...prev, // keep previous issues
//                 <div
//                     key={ticket.ticket} // unique key
//                     className="w-full p-2 flex flex-col">
//                     <p className="font-semibold items-center text-center w-full ">{ticket.issue}</p>
//                     <button className="bg-green-600 text-white p-2 w-full m-1 rounded">Complete</button>
//                 </div>,
//                 ]);
//             }} className={`bg-green-200 p-2 rounded-full text-xs text-green-900' ${openStates[ticket.ticket] ? "bg-yellow-200" : "bg-green-200"}`
//               }>
//               {openStates[ticket.ticket] ? "In-progress" : "Open"}</button>