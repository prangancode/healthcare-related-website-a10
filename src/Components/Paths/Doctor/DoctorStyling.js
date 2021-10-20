import React from 'react';
import Slide from 'react-reveal/Slide';


const DoctorStyling = (props) => {
    const { doctor_name, speciality, img } = props.doctor;
    return (
        <Slide bottom>
            <div className=" ring-4 ring-green-300 rounded-xl shadow-xl">
                <img className="rounded-t-xl  w-full p-5 object-cover" src={img} alt="" ></img>
                <div className="flex flex-col p-7">
                    <div className="flex flex-row">
                        <div className=" uppercase p-2 text-white bg-green-500 text-md rounded-2xl line-clamp-1 hover:line-clamp-none">
                            {doctor_name}
                        </div>
                    </div>
                    <div>

                        <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium text-2xl">
                            {speciality} </p>

                    </div>
                    <div>
                        <button className="bg-green-100 border-2 hover:ring-4 m-3 mx-auto p-1 ring-2 ring-green-400 rounded sm:w-11/12 lg:w-2/3 ">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default DoctorStyling;