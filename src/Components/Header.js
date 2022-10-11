import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Quizs
                            <br/>
                             And{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                Your Learning
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Quiz is always a short way to fast learning process. Quizzes can be used as a brief assessment in education and similar fields to measure growth in knowledge, abilities, or skills. They can also be televised for entertainment purposes.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <Link
                            to="/topics"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 bg-red-400 p-2 rounded-lg"
                        >
                            Go For Quiz
                        </Link>
                    </div>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Header;