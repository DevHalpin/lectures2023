import "./Navbar.css";
import { Link } from "react-router-dom";
import { useUser } from "../../contexts/userContext";



export const Navbar = () => {
  const { user, logout } = useUser();

  console.log(user)

  return (
    <header>
      <h1>System Profile</h1>
      <nav>
        <ul>
          <li><Link to="/">Profile</Link></li>
        </ul>
      </nav>
      <div className="login-bar">
        {user && <span>Logged in as: {user.name}</span>}
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button><Link to="/signin">Login</Link></button>
        )}
      </div>
    </header>
  );
};