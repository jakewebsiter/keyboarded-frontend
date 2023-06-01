import { NavLink } from 'react-router-dom';

export default function Navbar({ children }) {
  return (
    <>
      <nav className='fixed top-0 left-0 w-screen flex gap-32 text-white bg-primary text-2xl'>
        <NavLink to='/' className='nav-link ml-4'>
          Home
        </NavLink>
        <div className='flex gap-16'>
          <NavLink to='/bob' className='nav-link'>
            Bob
          </NavLink>
          <NavLink to='/yeah' className='nav-link'>
            Yeah
          </NavLink>
        </div>
      </nav>
      {children}
    </>
  );
}
