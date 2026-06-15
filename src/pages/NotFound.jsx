import { Link } from 'react-router-dom';
import './notfound.css';

export default function NotFound() {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link to='/' className='navbar'>Home</Link> 
        </div>
        
    );
};