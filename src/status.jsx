import React from "react";
import Ticket from "./Tickets";
const Status = ({taskStatus,ticketData}) => {
    return(
    <div>
          {/* task */}
          <div className='p-5'>
            <p className='font-semibold text-2xl text-gray-700'>Task Status </p>
            <div >
              <div className="bg-white flex flex-col rounded p-2">
                {taskStatus}
              </div>
            </div>
          </div>
            {/* resolved */}
            <div className='p-10'>
            <p className='font-semibold text-2xl text-gray-700'>Resolved Task</p>
            <div>
              <p className='text-sm font-light text-gray-500'>No resolved tasks yet.</p>
            </div>
          </div>
</div>
)
}

export default Status;