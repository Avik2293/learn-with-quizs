import React from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const EachQuiz = ({ question }) => {
    const handleToast = (clickedAns) => {
        if (clickedAns === question.correctAnswer) {
            // console.log(question.correctAnswer);
            // console.log(clickedAns);
            toast.success('Right Answer..', { autoClose: 1000 });
        }
        else {
            toast.warning('Wrong Answer..', { autoClose: 1000 });
        }
    };

    const rightAnswer = (answer) =>{
        // console.log(answer);
        toast.success(answer, { autoClose: 3000 });
    };

    return (
        <div className='border border-yellow-500 p-2 bg-orange-100 rounded-lg'>
            <div className='grid grid-cols-10 gap-2'>
                <div className='col-span-9'>
                    <h3 className='text-lg mb-2 font-semibold'>Question: {question.question}</h3>
                </div>
                <button onClick={() => rightAnswer(question.correctAnswer) }><FontAwesomeIcon className='p-3' icon={faEye} /></button>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <button className='border border-slate-800 rounded-lg bg-indigo-200 hover:bg-indigo-400' onClick={() => handleToast(question.options[0])}># {question.options[0]}</button>
                <button className='border border-slate-800 rounded-lg bg-indigo-200 hover:bg-indigo-400' onClick={() => handleToast(question.options[1])}># {question.options[1]}</button>
                <button className='border border-slate-800 rounded-lg bg-indigo-200 hover:bg-indigo-400' onClick={() => handleToast(question.options[2])}># {question.options[2]}</button>
                <button className='border border-slate-800 rounded-lg bg-indigo-200 hover:bg-indigo-400' onClick={() => handleToast(question.options[3])}># {question.options[3]}</button>
            </div>
        </div>
    );
};

export default EachQuiz;