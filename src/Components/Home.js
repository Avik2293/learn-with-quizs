import React, { useContext } from 'react';
import Header from './Header';
import QuizType from './QuizType';
import { QuizTypeContext } from './Roots';

const Home = () => {
    const quizTypeData = useContext(QuizTypeContext);
    // console.log(quizTypeData.data);
    return (
        <div>
            <Header></Header>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                    <p className="inline-block px-3 py-px mb-4 font-semibold tracking-wider text-teal-900 rounded-full bg-teal-accent-400 text-3xl">
                        Select Your Quiz Type
                    </p>
                    <p className="text-base text-gray-700 md:text-lg">
                        There are various types of quiz data. Mostly of them from coding related. If you interested in practising, you select type and get started.
                    </p>
                </div>
                <div className="grid gap-5 mx-auto lg:grid-cols-4 lg:max-w-screen-lg">
                    {
                        quizTypeData.data.map(quizType => <QuizType quizType={quizType} key={quizType.id}></QuizType>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;