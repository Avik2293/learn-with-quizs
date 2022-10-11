import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { QuizTypeContext } from './Roots';

const Statistics = () => {
    const quizNumberData = useContext(QuizTypeContext);
    // console.log(quizNumberData.data);
    return (
        <div className="flex flex-col items-center h-screen">
            <LineChart width={370} height={300} data={quizNumberData.data} margin={{ top: 50, right: 5, bottom: 5, left: -30 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            <h4 className='center'>Chart: Name of Quiz Type vs Quiz No. of each Type</h4>
        </div>
    );
};

export default Statistics;