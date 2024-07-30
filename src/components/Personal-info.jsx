import React from 'react';
import { Link } from 'react-router-dom';
import SideBarnNavbar from './SideBarnNavbar';
import infoPrivacy from '../assets/images/infoPrivacy.png';
import infoEdit from '../assets/images/infoEdit.png';
import infoShared from '../assets/images/infoShared.png';

const Personalinfo = () => {
  return (
    <div className="">
      <SideBarnNavbar />
      <div className="ml-[300px] mt-[20px] flex-1 p-5">
        <span>
          <h1 className="text-[12px] mb-2">
            <Link to="/settings" className="text-[12px] mb-2">Settings</Link> {'>'} Personal info
          </h1>
        </span>
        <p className="text-2xl font-semibold mb-5">Personal Info</p>
        <div className="grid grid-cols-3 gap-20 w-[90%]">
          <div className="col-span-2 bg-white p-5">
            <div className="flex justify-between">
              <p>User Name</p>
              <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
            </div>
            <p className='text-[#717171] text-[14px]'>Sandun Sanjeewa</p>
            <hr className="my-4 mb-5" />

            <div className="flex justify-between ">
              <p>Email address</p>
              <Link to="/Edit" className="underline font-semibold text-[14px]">Edit</Link>
            </div>
            <p className='text-[#717171] text-[14px]'>sandun@gmail.com</p>
            <hr className="my-4 mb-5" />

            <div className="flex justify-between ">
              <p>Phone numbers</p>
              <Link to="/Edit" className="underline font-semibold text-[14px]">Add</Link>
            </div>
            <p className='text-[#717171] text-[14px]'>Not provided</p>
            <hr className="my-4 mb-5" />

            <div className="flex justify-between ">
              <p>University</p>
              <Link to="/Edit" className="underline font-semibold text-[14px]">Add</Link>
            </div>
            <p className='text-[#717171] text-[14px]'>Not provided</p>
            <hr className="my-4 mb-5" />

            <div className="flex justify-between ">
              <p>About Yourself</p>
              <Link to="/Edit" className="underline font-semibold text-[14px]">Add</Link>
            </div>
            <p className='text-[#717171] text-[14px]'>Not provided</p>
            <hr className="my-4 mb-5" />

            <div className="flex justify-between ">
              <p>Emergency contact</p>
              <Link to="/Edit" className="underline font-semibold text-[14px]">Add</Link>
            </div>
            <p className='text-[#717171] text-[14px]'>Not provided</p>
            <hr className="my-4 mb-5" />
          </div>
          <div className="col-span-1 bg-white p-5 rounded-lg shadow-xl relative">
            <div className="flex items-start">
              <img src={infoPrivacy} alt="info Privacy" className='w-6 h-6 mb-4' />
              </div>
              <div>
              <p className='font-bold mb-4'>Why isn’t my info shown here?</p>
              <p className='text-[#717171] text-[14px]'>We’re hiding some account details to protect your identity.</p>
              <hr className="my-4 mb-5" />
              </div>

              <div className="flex items-start">
              <img src={infoEdit} alt="info Privacy" className='w-6 h-6 mb-4' />
              </div>
              <div>
              <p className='font-bold mb-4'>Which details can be edited?</p>
              <p className='text-[#717171] text-[14px]'>Details which uses to verify your identity can’t be changed. Contact info and some personal details can be edited, but we may ask you verify your identity the next time.</p>
              <hr className="my-4 mb-5" />
              </div>

              <div className="flex items-start">
              <img src={infoShared} alt="info Privacy" className='w-6 h-6 mb-4' />
              </div>
              <div>
              <p className='font-bold mb-4'>What info is shared with others?</p>
              <p className='text-[#717171] text-[14px]'>We are only releases contact information for Registered Users.</p>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalinfo;
