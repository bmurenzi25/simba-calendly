import type { NextPage } from 'next';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';
import Header from '../components/header';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="py-7 px-3.5">
          <div className="flex gap-16 p-32">
            <div className="flex-none w-1/2">
              <h4 className="font-bold">Cal.com</h4>
              <h2 className="font-bold text-7xl">
                You're one step away from simpler scheduling
              </h2>
              <p className="mt-4 text-gray-400">
                " I love being able to use a tool that just works, and that is
                open source. As a developer, I love being empowered to
                contribute to a tool that I use reguraly"
              </p>
              <div className="flex items-center gap-4 mt-8">
                <AccountCircleIcon />
                <div className="flex-col">
                  <p className="font-bold">
                    Cassidy Williams{' '}
                    <span className="text-sky-500">@cassidoo</span>
                  </p>
                  <h6 className="text-gray-400">
                    Director of Developer Experience at Netilify
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
                  <form action="#">
                    <div className="mt-6">
                      <div className="flex">
                        <div className="w-1/3 px-3 py-2 bg-gray-200 border">
                          <p>Cal.com /</p>
                        </div>
                        <input
                          type="text"
                          name="username"
                          className="w-full px-3 py-2 border focus:outline-none focus:shadow-outline"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <input
                        type="email"
                        name="email"
                        className="w-full px-3 py-2 border focus:outline-none focus:shadow-outline"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="mt-6">
                      <input
                        type="password"
                        name="email"
                        className="w-full px-3 py-2 border focus:outline-none focus:shadow-outline"
                        placeholder="*************"
                      />
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full py-3 font-bold text-center text-white bg-black"
                      >
                        Sign up for free
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
