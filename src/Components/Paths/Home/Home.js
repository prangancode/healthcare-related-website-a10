import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeDoctor from './HomeDoctor';
import HomeService from './HomeService';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';


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
            <div className='bg-indigo-100 lg:flex lg:flex-row justify-evenly sm:m-2 lg:m-6 p-10 rounded-3xl sm:flex-col-reverse sm:flex'>

                <div className='flex-col self-center sm:pt-1.5 sm:w-11/12 lg:w-3/5'>

                    <h1 className='font-bold text-indigo-800 text-5xl'>Your Healthy Life is Our First Priority</h1>

                    <Bounce bottom cascade>
                        <p className='mt-10 font-mono text-xl'>You might think that making your health your number one priority in life is impossible, what with work, family, friends, religion, and whatever else you have going on. Trust me, now is the time to start putting yourself and your health first. Why, you might ask – because when you are healthy, every other aspect of your life is much more enjoyable for you and those around you.</p>
                    </Bounce>
                    <Link to='/doctor'> <button className="bg-white border border-indigo-400 font-semibold hover:bg-indigo-400 hover:text-white mt-16  px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                        Explore us
                    </button>
                    </Link>
                </div>


                <div>
                    <Slide bottom cascade>
                        <img src='https://disin-react.hibootstrap.com/images/home-three/home-three-banner1.png' alt="study" />
                    </Slide>
                </div>
            </div>

            {/* Services */}

            <div>
                <h1 className='font-semibold p-5 text-5xl text-center '>Discover Our Services</h1>
            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-center font-thin italic w-11/12 ">It has always been our belief that the most effective use of our time as financial professionals is servicing our clients. Our clients are always our first priority, and we believe that focusing on helping them pursue their financial goals is the key to building the foundation for a strong relationship.</h1>
            </div>

            <div className="gap-8 grid lg:grid-cols-3 p-36 sm:p-10">
                {
                    homeServices.map(homeService => <HomeService homeService={homeService} key={homeService.id}></HomeService>)
                }
            </div>

            {/* Expertise */}
            {/* <div>
                <h1 className='font-black text-5xl text-center'>Our Expertise</h1>
            </div> */}
            <div className='lg:grid lg:grid-cols-3 items-end lg:py-10 sm:grid sm:grid-cols-1 sm:p-5'>
                <div className='lg:col-span-2 sm:ml-10'>

                    <div>
                        <h1 className='border-b-2 border-blue-400 font-sans lg:pb-5 lg:text-5xl lg:w-2/3 sm:pb-5 sm:pt-1.5 sm:text-4xl sm:text-center sm:w-11/12'>Our Speciality</h1>
                    </div>
                    <div className='gap-4 lg:grid lg:grid-cols-2 mt-12 sm:grid sm:grid-cols-1'>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl font-semibold text-purple-600'>Child Care</h1>
                                <p className='sm:text-justify italic'>Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks to eighteen years</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl font-semibold text-purple-600 '>24 Hour Doctor</h1>
                                <p className='sm:text-justify italic'>Healthline is available to call 24 hours per day/7 days a week on 0800 611 116 for free health advice, including interpreter services and NZ Relay Services.</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl font-semibold text-purple-600'>More Stuff</h1>
                                <p className='sm:text-justify italic'>You can see us for any urgent medical issue that you would otherwise see your GP for, as well as accident related injuries such as sprains, cuts or broken bones.</p>
                            </div>
                        </div>
                        <div className='border-2 rounded-2xl shadow-lg sm:w-11/12 w-2/3'>
                            <div className='p-11 text-center'>
                                <h1 className='mb-4 text-3xl font-semibold text-purple-600'>Enough Lab</h1>
                                <p className='sm:text-justify italic'>Adequate facilities, equipment, and supplies for laboratory experiences are inequitably distributed.</p>
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
                <h1 className='font-bold p-5 text-5xl text-center '>Our Dedicated Doctors</h1>
            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-center font-thin italic w-11/12">Find a doctor who is the perfect match for your medical needs. Use the tools below to search for a doctor by name, specialty, gender, service line or practice location.</h1>
            </div>
            <div className="gap-8 grid lg:grid-cols-3 p-36 sm:p-10">
                {
                    homeDoctors.map(homeDoctor => <HomeDoctor homeDoctor={homeDoctor} key={homeDoctor.id}></HomeDoctor>)
                }
            </div>

        </div>


    );
};

export default Home;