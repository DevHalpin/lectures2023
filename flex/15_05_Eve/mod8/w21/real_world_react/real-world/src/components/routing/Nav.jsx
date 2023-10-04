import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/useTheme";

const Nav = () => {

  const {themeToggle, handleThemeToggle} = useTheme();

  return (
    <div className={`navbar ${themeToggle ? 'dark': 'light'}`}>
      <ul className='navbar-menu'>
      <nav>
        <li>
        <Link to={'/'}>Home</Link><br/>
        </li>
        <li>
        <Link to={'/about'}>About</Link>
        </li>
      </nav>
      </ul>
      <button className='theme-toggler' onClick={handleThemeToggle}>Theme: { themeToggle ? '🌚' : '🌞' }</button>
    </div>
  )
}

export default Nav;