import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';

export const QuizTypeContext = createContext({});

const Roots = () => {
    const quizTypeData = useLoaderData();
    // console.log(quizTypeData);
    return (
        <QuizTypeContext.Provider value={quizTypeData}>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizTypeContext.Provider>
    );
};

export default Roots;