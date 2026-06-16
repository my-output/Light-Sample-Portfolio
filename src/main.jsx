import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Card from './components/Card';
import Summer from './pages/Summer';
import Nature from './pages/Nature';
import './main.css';

// Creating a routing system
const router = createBrowserRouter([
  {
    path: '/', // Root path
    element: <Home />, // layout component -- This is the hero/nav banner
    errorElement: <NotFound />, // Whenever you get lost
    children: [ // Every page connected to the root path, branching from Home,
      {
        index: true, // Equivalent to the old <Route index ... />
        element: <Card />, // 'About me' on home page
      },
      {
        path: 'projects', // Relative path (becomes '/path')
        element: <Projects />,
      },
      {
        path: 'summer',
        element: <Summer />,
      },
      {
        path: 'nature',
        element: <Nature />,
      },
    ],
  },
]);

// Only pass router to App
function App() {
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(<App />);