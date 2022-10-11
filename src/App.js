import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Roots from './Components/Roots';
import Statistics from './Components/Statistics';
import Blog from './Components/Blog';
import ErrorPage from './Components/ErrorPage';
import Quizs from './Components/Quizs';
import Topics from './Components/Topics';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
    children: [
      {path:'/', element: <Home></Home>},
      {path:'/home', element: <Home></Home>},
      {path:'/topics', element: <Topics></Topics>},
      {path:'/statistics', element: <Statistics></Statistics>},
      {path:'/blog', element: <Blog></Blog>},
      {path:'/quizs/:quizId', 
      loader: async ({params}) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
      }, 
      element: <Quizs></Quizs>}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>
      <Roots></Roots>
    </RouterProvider>
  );
}

export default App;
