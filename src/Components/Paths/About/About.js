import React from 'react';
import Slide from 'react-reveal/Slide';
const About = () => {
    return (
        <Slide bottom>
            <div>
                <div className='lg:flex lg:flex-row items-center sm:flex sm:flex-col'>
                    <div className='lg:p-28 sm:p-8'>
                        <img src='https://disin-react.hibootstrap.com/images/about1.jpg' alt="" />
                    </div>
                    <div style={{
                        backgroundImage: `url("https://disin-react.hibootstrap.com/images/about-shape1.png")`
                    }} className='sm:p-10 sm:w-11/12 lg:space-y-10 lg:w-1/3'>
                        <h2 className='font-bold text-blue-500  text-5xl p-1 '>About Our Hospital</h2>
                        <p className='font-mono text-indigo-600 text-2xl p-1'>We’ve served this richly diverse region as a community hospital for more than 60 years. And as the area has grown, so have we. But as Long Island doctors, nurses, and healthcare professionals, we’ve never outgrown our devotion to the health of the community we all call home.</p>
                        <ul className='font-bold space-y-2.5 text-2xl text-purple-700 sm:p-1'>
                            <li>Browse Our Website</li>
                            <li>Choose Service</li>
                            <li>Send Message</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default About;