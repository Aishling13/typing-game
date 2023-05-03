import '../Home/App.css';
import {Link} from "react-router-dom";

function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <h1>Typing Game</h1>
      </header>

      {/* Homepage
      
      maybe have:
      - button e.g.start or enter button
      - to have mutiple pages need to add react router
      - maybe a cool background/h1 heading (nice to have later on)
      
      */}
      <main>
        <Link 
          className="Homepage-link" 
          to="/typing-game"
        >
          ENTER
        </Link>
      </main>
      <div className="Homepage-text">
        made by coco &#x2665;
      </div>
    </div>
  );
}

export default Homepage;
