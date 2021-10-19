import React from 'react';
const About = () => {
    return (
        <div>
            <div className='lg:flex lg:flex-row items-center sm:flex sm:flex-col'>
                <div className='lg:p-28 sm:p-8'>
                    <img src='https://disin-react.hibootstrap.com/images/about1.jpg' alt="" />
                </div>
                <div style={{
                    backgroundImage: `url("https://disin-react.hibootstrap.com/images/about-shape1.png")`
                }} className='sm:p-10 sm:w-11/12 lg:space-y-10 lg:w-1/3'>
                    <h2 className='font-bold  text-5xl'>About Our Hospital</h2>
                    <p className='font-normal text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores atque harum reiciendis officia voluptate explicabo in sed at autem? Ipsam veniam sed dicta sequi ea labore voluptatibus. Sunt, quas recusandae.</p>
                    <ul className='font-bold space-y-2.5 text-2xl'>
                        <li>Browse Our Website</li>
                        <li>Choose Service</li>
                        <li>Send Message</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;