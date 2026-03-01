import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
      <div style={{ gridTemplateColumns: "3fr 1fr 1fr 1fr 1fr 1fr" }} className="d-grid h-100">
        <a className="navbar-brand">Hey, I'm Toby!</a>
        <a className="navbar-text align-content-center" href="/resume.pdf">Resume</a>
        <Link className="navbar-text align-content-center" to="/gallery">Photography</Link>
      </div>
    </nav>
  );
}

export default Navbar;