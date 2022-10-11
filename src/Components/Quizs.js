import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachQuiz from './EachQuiz';

const Quizs = () => {
    const quizData = useLoaderData();
    // console.log(quizData.data);
    return (
        <div className='bg-slate-400 text-center m-2 p-3'>
            <h2 className='text-3xl font-bold'>Quiz For {quizData.data.name}</h2>
            <h4 className='text-2xl'>Total Quiz: {quizData.data.total}</h4>
            <h4 className='mb-3'>Click on Eye button for Correct Answer.</h4>
            <div className='grid grid-cols-2 gap-4'>
            {
                quizData.data.questions.map(question => <EachQuiz question={question} key={question.id}></EachQuiz>)
            }
            </div>
        </div>
    );
};

export default Quizs;