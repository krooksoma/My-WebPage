import { Fa500Px } from "react-icons/fa";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <Fa500Px /> Professional Info Services
        </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mb-2 mb-lg-0 ">
          <li className="nav-item col">
            <a className="nav-link active" href="/">
              Contact
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link active" href="/">
              About
            </a>
          </li>          
        </ul>
      </div>
    </nav>
  );
}

export default Header;
