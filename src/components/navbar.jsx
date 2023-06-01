import { NavLink } from 'react-router-dom';

export default function Navbar({ children }) {
  return (
    <>
      <nav className='fixed top-0 left-0 w-screen flex sm:gap-32 text-white bg-primary text-2xl responsive-nav handle-nav-show'>
        <NavLink to='/' className='nav-link sm:ml-4'>
          Home
        </NavLink>
        <div className='flex sm:gap-16 responsive-nav sm:static sm:right-0 absolute right-[-10000px]'>
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
