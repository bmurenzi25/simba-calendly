import Link from 'next/link';
import React from 'react';

const Login = () => {
  return (
    <div className="grid h-screen bg-gray-200 place-items-center">
      <div>
        <div className="my-4 text-center">
          <h3 className="text-2xl font-bold">Cal.com</h3>
          <h3 className="text-2xl font-bold">SIgn In to your account</h3>
        </div>
        <form action="#" className="p-8 bg-white border border-gray-300">
          <div>
            <label htmlFor="email" className="text-l">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-6">
            <div className="flex justify-between">
              <label htmlFor="username" className="text-l">
                Password
              </label>
              <p className="text-l">Forgot?</p>
            </div>
            <input
              type="password"
              name="email"
              id="username"
              className="w-full px-3 py-2 border focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 font-bold text-center text-white bg-black"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p>
            Don&apos;t have an account?{' '}
            <span className="font-bold text-black">
              {' '}
              <Link href="/">
                <a>Create an account </a>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
