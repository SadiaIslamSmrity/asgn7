import React from "react";
const Footer = () => {
    return (
        <div className='bg-black p-15'>
        <div className='flex flex-row justify-between'>
          <div className='w-1/5  flex flex-col gap-2'>
            <p className='font-semibold text-2xl text-white'>CS — Ticket System</p>
            <p className='text-start text-xs text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='w-1/5 text-start text-xs text-gray-400  flex flex-col gap-2 items-center'>
            <p className='font-semibold text-xl text-white'>Company</p>
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Contact Saled</p>
          </div>
          <div className='w-1/5 text-start text-xs text-gray-400  flex flex-col gap-2 items-center'>
            <p className='font-semibold text-xl text-white'>Services</p>
            <p>Products And Services</p>
            <p>Customer Stories</p>
            <p>Downloaded Apps</p>
          </div>
          <div className='w-1/5 text-start text-xs text-gray-400  flex flex-col gap-2 items-center'>
            <p className='font-semibold text-xl text-white'>Information</p>
            <p>Privacy Policy</p>
            <p>Terms and Condition</p>
            <p>Join Us</p>
          </div>
          <div className='w-1/5 text-start text-xs text-gray-400 flex flex-col gap-2 items-center'>
            <p className='font-semibold text-xl text-white'>Social Links</p>
            <p>@CS — Ticket System</p>
            <p>@CS — Ticket System</p>
            <p>@CS — Ticket System</p>
            <p>support@cst.com</p>
          </div>
        </div>
        <div className='border-t-1 border-gray-700 m-5'><p className='text-gray-300 text-xs text-center p-5'>© 2025 CS — Ticket System. All rights reserved.</p></div>
      </div>
    );
};
export default Footer;