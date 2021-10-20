import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Pulse from 'react-reveal/Pulse';


const Header = () => {
    const { logOut, user } = useAuth();
    return (
        <div>
            <nav className=" bg-indigo-500 flex items-center justify-between flex-wrap bg-teal-500 p-8">

                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Pulse>
                        <span className="font-mono font-bold sm:text-2xl  lg:flex-grow lg:text-4xl">EVER CARE Hospital</span>
                    </Pulse>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow-0 lg:flex lg:items-center lg:w-auto">

                    <div className="font-serif lg:flex-grow text-2xl ">
                        <Link to='/home' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:bg-indigo-800 p-2 rounded-lg mr-4">
                            Home
                        </Link>
                        <Link to='/doctor' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:bg-indigo-800 p-2 rounded-lg">
                            Doctors
                        </Link>
                        <Link to='/service' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:bg-indigo-800 p-2 rounded-lg mr-4">
                            Services
                        </Link>
                        <Link to='/blog' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:bg-indigo-800 p-2 rounded-lg mr-4">
                            Blogs
                        </Link>
                        <Link to='/about' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:bg-indigo-800 p-2 rounded-lg mr-4">
                            About Us
                        </Link>
                        {user.email && <p className='block  hover:text-white lg:inline-block lg:mt-0 mr-2 mt-4 text-black text-teal-200'>{user.displayName}</p>}
                        {user.email ?

                            <Link to='/login' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2">
                                <button onClick={logOut} className='bg-white text-indigo-800 hover:bg-blue-800 hover:text-white p-1 text-xl rounded'> Log Out</button> </Link>


                            :
                            <Link to='/login' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2">
                                <button className=' bg-white text-indigo-800 hover:bg-blue-800 hover:text-white px-1 rounded'>Login</button> </Link>

                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;