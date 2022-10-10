import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Roots from './Components/Roots';
import Quizs from './Components/Quizs';
import Statistics from './Components/Statistics';
import Blog from './Components/Blog';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
    children: [
      {path:'/', element: <Home></Home>},
      {path:'/home', element: <Home></Home>},
      {path:'/quizs', element: <Quizs></Quizs>},
      {path:'/statistics', element: <Statistics></Statistics>},
      {path:'/blog', element: <Blog></Blog>}
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
