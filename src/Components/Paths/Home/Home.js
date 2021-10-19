import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeDoctor from './HomeDoctor';
import HomeService from './HomeService';

const Home = () => {
    const [homeServices, setHomeServices] = useState([]);
    const [homeDoctors, setHomeDoctors] = useState([]);
    useEffect(() => {
        fetch('./homeService.JSON')
            .then(res => res.json())
            .then(data => setHomeServices(data));
    }, [])
    useEffect(() => {
        fetch('./homeDoctors.JSON')
            .then(res => res.json())
            .then(data => setHomeDoctors(data))
    }, [])
    return (
        <div>
            <div className='bg-gray-100 lg:flex lg:flex-row justify-evenly lg:m-12 lg:p-10 rounded-3xl sm:flex-col-reverse sm:flex'>

                <div className='flex-col self-center sm:pt-1.5 sm:w-11/12 lg:w-1/3'>
                    <h1 className='font-bold text-5xl'>Your Healthy Life is Our First Priority</h1>
                    <p className='mt-10 text-2xl'>Education connects you with the stories, theories and accomplishments of faraway cultures and generations. It offers you a body of knowledge greater than you can ever gain on your own in one lifetime.</p>
                    <Link to='/doctor'> <button className="bg-white border border-gray-400 font-semibold hover:bg-gray-400 hover:text-white mt-16  px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                        Doctors
                    </button>
                    </Link>
                </div>


                <div>
                    <img src='https://disin-react.hibootstrap.com/images/home-three/home-three-banner1.png' alt="study" />
                </div>
            </div>

            {/* Services */}

            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>Discover Our Services</h1>
            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique at mollitia, corporis ullam exercitationem ipsam qui cupiditate aliquam officia earum quae a voluptas? Nobis perspiciatis ipsa architecto porro laborum officiis.</h1>
            </div>

            <div className="gap-8 grid lg:grid-cols-3 p-36 sm:p-20">
                {
                    homeServices.map(homeService => <HomeService homeService={homeService} key={homeService.id}></HomeService>)
                }
            </div>

            {/* Expertise */}
            <div>
                <h1 className='font-black text-5xl text-center'>Our Expertise</h1>
            </div>
            <div className='lg:grid lg:grid-cols-3 items-end lg:p-36 sm:grid sm:grid-cols-1 sm:p-5'>
                <div className='lg:col-span-2'>

                    <div>
                        <h1 className='border-b-2 border-blue-400 font-sans lg:pb-5 lg:text-5xl lg:w-1/3 sm:pb-5 sm:pt-1.5 sm:text-4xl sm:text-center sm:w-11/12'>Our Speciality</h1>
                    </div>
                    <div className='gap-4 grid grid-cols-2 mt-24'>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl'>Child Care</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl'>Child Care</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl'>Child Care</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl'>Child Care</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-1'>
                    <img className='lg:rounded-2xl sm:p-11 sm:rounded-full lg:p-0.5' src="https://disin-react.hibootstrap.com/images/about4.jpg" alt="" />
                </div>
            </div>

            {/* Doctors */}

            <div>
                <h1 className='font-bold p-10 text-5xl text-center'>Our Doctors</h1>
            </div>
            <div>
                <h1 className="mx-auto sm:w-11/12 text-3xl text-center w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique at mollitia, corporis ullam exercitationem ipsam qui cupiditate aliquam officia earum quae a voluptas? Nobis perspiciatis ipsa architecto porro laborum officiis.</h1>
            </div>
            <div className="gap-8 grid lg:grid-cols-3 p-36 sm:p-20">
                {
                    homeDoctors.map(homeDoctor => <HomeDoctor homeDoctor={homeDoctor} key={homeDoctor.id}></HomeDoctor>)
                }
            </div>

        </div>


    );
};

export default Home;