import { createRoot } from 'react-dom/client';
import { Outlet, Link } from 'react-router-dom';
// My Layout
export default function Home() {
  return (
    <div>
      <nav className='hero'>
        <h1>Photo Portfolio</h1>
        <Link to="/" className='navbar'>Home</Link>
        <Link to="/projects" className='navbar'>Portfolio</Link>
      </nav>
      <Outlet /> {/* Renders child routes (Card or Projects) */}
    </div>
  );
}