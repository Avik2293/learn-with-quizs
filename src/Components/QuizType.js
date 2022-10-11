import React from 'react';
import { Link } from 'react-router-dom';

const QuizType = ({quizType}) => {
    return (
        <div>
            <div className="grid sm:grid-cols-3 rounded bg-sky-400">
                <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                    <img
                        className="absolute object-cover w-full h-full rounded bg-black"
                        src={quizType.logo} alt=""
                    />
                </div>
                <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                    <p className="text-lg font-bold">{quizType.name}</p>
                    <p className="mb-4 text-sm tracking-wide text-gray-800">Total Quiz: {quizType.total}
                    </p>
                    <div className="flex items-center space-x-3">
                        <Link
                            to="/"
                            className="text-white-600 transition-colors duration-300 hover:text-deep-purple-accent-400 bg-slate-300 rounded p-1"
                        >Let's Start
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizType;