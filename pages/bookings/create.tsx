import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import Router from 'next/router';

interface FormBoookingValues {
  username: string;
  length: string;
  time: string;
  date: string;
}

const schema = Yup.object({
  username: Yup.string().required('Username is required'),
  length: Yup.string().required('length field cannot be empty'),
  time: Yup.string().required('time is a required field'),
  date: Yup.string().required('Date is a required field'),
});

const Create = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      Router.push('/');
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  const {
    createBooking,
    handleSubmit,
    formState: { errors },
  } = useForm<FormBoookingValues>({
    resolver: yupResolver(schema),
  });
  const onSumbit: SubmitHandler<FormBoookingValues> = async (data) {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/bookings/create', {
        ...data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsError(true);
      setIsLoading(false);
    }
  }
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
