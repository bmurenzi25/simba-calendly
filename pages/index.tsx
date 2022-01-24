import type { NextPage } from 'next';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import Router from 'next/router';
import Header from '../components/header';

interface FormValues {
  username: string;
  email: string;
  password: string;
}
const schema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .max(50, 'Username cant exceeds 50 characters long')
    .min(6, 'Username cannot be less than 6 characters'),
  email: Yup.string()
    .required('Email field cannot be empty')
    .max(50, 'Email cannot be more than 6 exceeds than 50 characters long')
    .min(5, 'Email cannot be less than 5 characters long'),
  password: Yup.string()
    .required('Password is a required field')
    .min(5, 'Password cannot be less than 5 characters long'),
});
const Home: NextPage = () => {
  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
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
      const res: any = await axios.post('/api/auth/register', {
        ...data,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('name', JSON.stringify(res.data.data.name));
      localStorage.setItem('id', JSON.stringify(res.data.data.id));
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className="py-7 px-3.5">
          <div className="flex gap-16 p-32">
            <div className="flex-none w-1/2">
              <h4 className="font-bold">Cal.com</h4>
              <h2 className="font-bold text-7xl">
                You&apos;re one step away from simpler scheduling
              </h2>
              <p className="mt-4 text-gray-400">
                &quot; I love being able to use a tool that just works, and that
                is open source. As a developer, I love being empowered to
                contribute to a tool that I use regularly &quot;
              </p>
              <div className="flex items-center gap-4 mt-8">
                <AccountCircleIcon />
                <div className="flex-col">
                  <p className="font-bold">
                    Cassidy Williams{' '}
                    <span className="text-sky-500">@cassidoo</span>
                  </p>
                  <h6 className="text-gray-400">
                    Director of Developer Experience at Netlify
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex-none w-1/2">
              <div className="border border-gray-400 ">
                <div className="m-8">
                  <h3 className="font-bold text-l">
                    Start your 14-day free trial
                  </h3>
                  <p className="text-gray-400">
                    No credit card required. Try all pro features for 14 days.
                    Upgrade at any time to Pro for $12/month.
                  </p>
                  <div className="flex items-center w-full">
                    <div className="border border-gray-400 w-[48%]" />
                    <KeyboardArrowDownIcon />
                    <div className="border border-gray-400 w-[48%]" />
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-6">
                      {isError && <p className="text-red-600">{error}</p>}
                      <div className="flex">
                        <div className="w-1/3 px-3 py-2 bg-gray-200 border">
                          <p>Cal.com /</p>
                        </div>
                        <input
                          {...register('username')}
                          type="text"
                          className="w-full px-3 py-2 border focus:outline-none focus:shadow-outline"
                          placeholder="Username"
                        />
                      </div>
                      <p className="text-red-700">{errors.username?.message}</p>
                    </div>
                    <div className="mt-6">
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-3 py-2 border focus:outline-none focus:shadow-outline"
                        placeholder="Email Address"
                      />
                      <p className="text-red-700">{errors.email?.message}</p>
                    </div>
                    <div className="mt-6">
                      <input
                        {...register('password')}
                        type="password"
                        className="w-full px-3 py-2 border focus:outline-none focus:shadow-outline"
                        placeholder="*************"
                      />
                      <p className="text-red-700">{errors.password?.message}</p>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full py-3 font-bold text-center text-white bg-black"
                      >
                        {isLoading ? <CircularProgress /> : 'Sign up for free'}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="p-1 mt-8 bg-gray-200">
                  <p className="mx-8 my-4">
                    By signing up, you agree to our{' '}
                    <span className="font-bold text-black">
                      Terms of services
                    </span>{' '}
                    and{' '}
                    <span className="font-bold text-black">Privacy Policy</span>{' '}
                    Need help?{' '}
                    <span className="font-bold text-black">Get in touch</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
