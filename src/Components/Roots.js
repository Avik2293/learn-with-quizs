import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navigation from './Navigation';

const QuizTypeContext = createContext({});

const Roots = () => {
    const quizTypeData = useLoaderData();
    console.log(quizTypeData);
    return (
        <QuizTypeContext.Provider value={quizTypeData.data}>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </QuizTypeContext.Provider>
    );
};

export default Roots;