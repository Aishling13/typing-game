import { Outlet, Link } from "react-router-dom";
// import './Navigation.css';

const Navigation = () => {
  return (
    <div classname="Navigation">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/typing-game">Typing Game</Link>
          </li>
          <li>
            <Link to="/highscore">Highscore</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
};

export default Navigation;