import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const HomeService = (props) => {
    const { service_name, img, description, id } = props.homeService;
    return (
        <Fade left>
            <div className=" ring-4 ring-indigo-300 rounded-xl shadow-xl">
                <img className="rounded-t-xl  w-full  object-cover" src={img} alt="" ></img>
                <div className="flex flex-col p-7">
                    <div className="flex flex-row justify-center text-center">
                        <div className=" text-lg uppercase bg-indigo-500 p-2  text-white rounded-2xl line-clamp-1 hover:line-clamp-none">
                            {service_name}
                        </div>
                    </div>
                    <div>

                        <p className="text-base text-center text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none font-medium">
                            {description} </p>

                    </div>
                    <div className="flex justify-center items-center">
                        <Link to={`/serviceDetail/${id}`}>
                            <button className="bg-white border border-indigo-400 font-semibold hover:bg-indigo-300 mt-4 px-6 py-1 rounded shadow text-gray-800 ">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default HomeService;