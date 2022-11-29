import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";

function HeroLink(props) {
  return (
    <Link to={props.to}>
      <li>
        <h3>{props.text}</h3>
      </li>
    </Link>
  )
}

function Home() {
  return (
    <div className="home">
      <div className="split-container hero">
        <div className="image-container">
          <img src="logo.png" />
        </div>
        <div className="quickstart">
          <h1 className="title">
            Data has never been more fun!
          </h1>
          <h3>Jump right in:</h3>

          <ul className="hero-nav">
            <HeroLink to="/lessons" text="Lessons" />
            <HeroLink to="/games" text="Games" />
          </ul>
        </div>
      </div>
      
      <div className="split-container">
        <div>
          <h1 className="title">Welcome!</h1>
          <p>
            KIDATA is a learning platform designed to teach kids about data 
            science in a way that appeals to them.  
          </p>
        </div>
        <div className="right-align">
          <h1 className="title">Information Box</h1>
            <p>
              With body text aligned to the right...
            </p>
        </div>
      </div>

      {/* temporary: */}
      <div style={{paddingBottom: "100px"}} />
    </div>
  )
}

export default Home;