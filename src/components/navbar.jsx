import { NavLink } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <div className="main-links">
          <NavLink to="/bob">Bob</NavLink>
          <NavLink to="/yeah">Yeah</NavLink>
        </div>
      </nav>
      {children}
    </>
  );
}
