import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom'; // Updated imports
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Card from './components/Card';
import './main.css';

// My Layout
function Hero() {
  return (
    <div>
      <nav className='hero'>
        <h1>Example Site</h1>
        <Link to="/">Home</Link>
        <Link to="/projects">Second Page</Link>
      </nav>
      <Outlet /> {/* Renders child routes (Card or Projects) */}
    </div>
  );
}

// 1. Define the router outside the component using the new data API
const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />, // layout component
    errorElement: <NotFound />,
    children: [
      {
        index: true, // Equivalent to the old <Route index ... />
        element: <Card />,
      },
      {
        path: 'projects', // Relative path (becomes /projects)
        element: <Projects />,
      },
    ],
  },
]);

// 2. Simple App component that just provides the router
function App() {
  return <RouterProvider router={router} />;
}

// 3. Render the App
createRoot(document.getElementById('root')).render(<App />);   