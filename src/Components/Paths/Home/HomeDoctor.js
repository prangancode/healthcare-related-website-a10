import React from 'react';
import Fade from 'react-reveal/Fade';

const HomeDoctor = (props) => {
    const { doctor_name, speciality, img } = props.homeDoctor;
    return (
        <Fade left>
            <div className=" ring-4 ring-green-200 rounded-xl shadow-xl">
                <img className="rounded-t-xl  w-full p-5 rounded-xl object-cover" src={img} alt="" ></img>
                <div className="flex flex-col p-7">
                    <div className="flex flex-row">
                        <div className=" text-sm uppercase bg-green-500 p-1 px-2 text-white rounded-2xl line-clamp-1 hover:line-clamp-none">
                            {doctor_name}
                        </div>
                    </div>
                    <div>

                        <p className="text-xl text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
                            {speciality} </p>

                    </div>
                    <div>
                        <button className="bg-green-100 border-2 hover:ring-4 m-3 mx-auto p-1 ring-2 ring-green-400 rounded sm:w-11/12 lg:w-3/5 ">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default HomeDoctor;