import React from 'react';

const HomeDoctor = (props) => {
    const { doctor_name, speciality, img } = props.homeDoctor;
    return (
        <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">
            <img className="rounded-t-xl  w-full  object-cover" src={img} alt="" ></img>
            <div className="flex flex-col p-7">
                <div className="flex flex-row">
                    <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl line-clamp-1 hover:line-clamp-none">
                        {doctor_name}
                    </div>
                </div>
                <div>

                    <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
                        {speciality} </p>

                </div>
                <div>
                    <button className="bg-blue-100 border-2 hover:ring-4 m-3 mx-auto p-1 ring-2 ring-blue-400 rounded sm:w-11/12 lg:w-1/3 ">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeDoctor;