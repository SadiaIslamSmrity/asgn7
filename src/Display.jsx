import React from "react";
import img1 from "./vector1.png";
import img2 from "./vector2.png";
const Display = ({progressCount,resolvedCount}) => {
    return (
        <div className='flex flex-row justify-between items-center p-15 gap-4 bg-gray-100'>
        {/* inProgress */}
        <div className='flex flex-row justify-center items-center bg-gradient-to-r from-purple-800 to-purple-400 h-50 w-1/2 rounded-sm text-center items-center'><div className='bg-cover bg-center opacity-100 h-full w-1/2 object-cover' style={{ backgroundImage: `url(${img1})`}}></div>
        <div className='flex flex-col'><p className='text-white'>In-Progress</p><span className='text-5xl text-white font-bold'>{progressCount}</span></div>
        <div className='bg-cover bg-center opacity-100 h-full w-1/2 object-cover transform scale-x-[-1]' style={{ backgroundImage: `url(${img1})`}}></div></div>
        {/* resolved */}
        <div className='flex flex-row justify-center items-center bg-gradient-to-l from-green-800 to-green-400 h-50 w-1/2 rounded-sm text-center items-center'><div className='bg-cover bg-center opacity-100 h-full w-1/2 object-cover' style={{ backgroundImage: `url(${img1})`}}></div>
        <div className='flex flex-col'><p className='text-white'>Resolved</p><span className='text-5xl text-white font-bold'>{resolvedCount}</span></div>
        <div className='bg-cover bg-center opacity-100 h-full w-1/2 object-cover transform scale-x-[-1]' style={{ backgroundImage: `url(${img1})`}}></div></div>
      </div>
    );
};
export default Display;