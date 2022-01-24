import { yupResolver } from '@hookform/resolvers/yup';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

const schema = Yup.object({
  email: Yup.string().required('Email field cannot be empty'),
  password: Yup.string().required('Password is a required field'),
});

const Login = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      Router.push('/bookings');
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post('/api/auth/login', {
        ...data,
      });
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="grid h-screen bg-gray-200 place-items-center">
      <div>
        <div className="my-4 text-center">
          <h3 className="text-2xl font-bold">Cal.com</h3>
          <h3 className="text-2xl font-bold">SIgn In to your account</h3>
        </div>
        <form
          className="p-8 bg-white border border-gray-300"
          onSubmit={handleSubmit(onSubmit)}
        >
          {isError && <p className="text-red-600">{error}</p>}
          <div>
            <label htmlFor="email" className="text-l">
              Email address
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-3 py-2 border focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-700">{errors.email?.message}</p>
          </div>
          <div className="mt-6">
            <div className="flex justify-between">
              <label htmlFor="username" className="text-l">
                Password
              </label>
              <p className="text-l">Forgot?</p>
            </div>
            <input
              {...register('password')}
              type="password"
              className="w-full px-3 py-2 border focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-700">{errors.password?.message}</p>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 font-bold text-center text-white bg-black"
            >
              {isLoading ? <CircularProgress /> : 'Sign In'}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p>
            Don&apos;t have an account?{' '}
            <span className="font-bold text-black">
              {' '}
              <Link href="/">
                <a>Create an account</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
