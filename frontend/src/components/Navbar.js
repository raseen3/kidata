import { Link } from "react-router-dom";

function NavbarLink(props) {
  return (
    <Link to={props.to}>
      <li>
        <h4>{props.text}</h4>
      </li>
    </Link>
  )
}

function Navbar() {
  return (
    // div, just so we have some sort of container and not a raw ul:
    <div className="navbar">
      <ul>
        <NavbarLink to="/" text="Home" />
        <NavbarLink to="/lessons" text="Lessons" />
        <NavbarLink to="/games" text="Games" />
        <NavbarLink to="/about" text="About" />
        <NavbarLink to="/contact" text="Contact" />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6n1x87emlc1Xk_ublhrTQcVwF4AiJjYvRTGCoVpJ_k3kbNg/viewform?usp=sf_link"> Feedback</a>
      </ul>
    </div>
  )
}

export default Navbar;