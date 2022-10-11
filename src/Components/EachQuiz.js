import React from 'react';
import { toast } from 'react-toastify'

const EachQuiz = ({ question }) => {
    const handleToast = (clickedAns) => {
        if(clickedAns === question.correctAnswer){
            // console.log(question.correctAnswer);
            // console.log(clickedAns);
            toast.success('Right Answer..', { autoClose: 1000 });
        }
        else{
            toast.warning('Wrong Answer..', { autoClose: 1000 });
        }
    };
    
    return (
        <div className='border border-yellow-500 p-2 bg-orange-100 rounded-lg'>
            <h3 className='text-lg mb-2 font-semibold'>Question: {question.question}</h3>
            <div className='grid grid-cols-2 gap-2'>
            <button className='border border-slate-800 rounded-lg' onClick ={() => handleToast(question.options[0])}>1. {question.options[0]}</button>
            <button className='border border-slate-800 rounded-lg' onClick ={() => handleToast(question.options[1])}>2. {question.options[1]}</button>
            <button className='border border-slate-800 rounded-lg' onClick ={() => handleToast(question.options[2])}>3. {question.options[2]}</button>
            <button className='border border-slate-800 rounded-lg' onClick ={() => handleToast(question.options[3])}>4. {question.options[3]}</button>
            </div>
        </div>
    );
};

export default EachQuiz;