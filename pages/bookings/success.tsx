import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GoogleIcon from '@mui/icons-material/Google';

const Success = () => {
  return (
    <div className="grid h-screen bg-gray-200 place-items-center">
      <div className="p-8 bg-white border border-gray-300 w-[40%]">
        <div className='text-center '>
        <CheckCircleIcon color='success' fontSize='large' />
        <p className='py-4 text-xl font-bold'>This meeting is scheduled</p>
        <p className='mb-8'>
          We emailed you with the other attendees a calendar invitation with all
          the details.
        </p>
        </div>
        <div className="flex gap-24 mb-8">
          <div className="flex-none">
            <p className="font-bold">What</p>
          </div>
          <div className="flex-none">
            <p>15 minutes between Daniel Tonel and Test</p>
          </div>
        </div>
        <div className="flex gap-24 mb-8">
          <div className="flex-none">
            <p className="font-bold">When</p>
          </div>
          <div className="flex-none">
            <p>Wednesday, 29 December 2021</p>
            <p>
              16:30PM - 15mins{' '}
              <span className="text-gray-500">(Europe/Vienna)</span>{' '}
            </p>
          </div>
        </div>
        <div className="flex gap-24 mb-8">
          <div className="flex-none">
            <p className="font-bold">Add to calendar</p>
          </div>
          <div className="flex gap-4">
            <div className="p-1 border border-gray-200">
              <GoogleIcon />
            </div>
            <div className="p-1 border border-gray-200">
              <GoogleIcon />
            </div>
            <div className="p-1 border border-gray-200">
              <GoogleIcon />
            </div>
            <div className="p-1 border border-gray-200">
              <GoogleIcon />
            </div>
          </div>
        </div>
        <p className="mb-8 text-center text-gray-500">
          Create your own booking link with cal.com
        </p>
        <div className="flex">
          <input
            type="text"
            name=""
            className="w-3/5 px-3 py-2 border focus:outline-none focus:shadow-outline"
            value="user@cal.com"
          />
          <button type="submit" className="w-2/5 px-3 py-2 text-white bg-black">
            Try it for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
