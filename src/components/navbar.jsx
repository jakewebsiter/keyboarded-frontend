import { NavLink } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bob">Bob</NavLink>
      </nav>
      {children}
    </>
  );
}
