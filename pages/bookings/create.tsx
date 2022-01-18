import Image from 'next/image';
import React, { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Create = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="grid h-screen bg-gray-200 place-items-center">
      <div className="p-8 bg-white border border-gray-300">
        <div className="flex gap-12">
          <div className="pr-12">
            <div className="my-1">
              <Image src="/user.jpeg" width={48} height={48} />
            </div>
            <h4 className="font-bold text-gray-400">Daniel Tonel</h4>
            <h2 className="mb-4 text-2xl font-bold">15 Min Meeting</h2>
            <div className="flex gap-2 mb-4">
              <AccessTimeIcon color="action" />
              <p className="text-gray-500">15 Minutes</p>
            </div>
            <div className="flex gap-2 mb-4">
              <CalendarTodayIcon color="success" />
              <p className="text-green-600">4:30pm</p>
            </div>
          </div>
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
