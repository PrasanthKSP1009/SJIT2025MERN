import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";
const Navbar = () => {
  var [dropdown, showDropdown] = useState(false);
  return (
    <header>
      <nav>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="link">
            Gallery
          </Link>
        </li>
        <div
          className="dropdown"
          onMouseEnter={() => showDropdown(!dropdown)}
          onMouseLeave={() => showDropdown(!dropdown)}
        >
          <span className="link">Hooks</span>
          {dropdown && (
            <ol className="dropdown-list">
              <li>
                <Link to="/use-state" className="dropdown-link">
                  useState
                </Link>
              </li>
              <li>
                <Link to="/use-effect" className="dropdown-link">
                  useEffect
                </Link>
              </li>
              <li>
                <Link to="/use-effect-api" className="dropdown-link">
                  useEffectWithAPI
                </Link>
              </li>
              <li>
                <Link to="/use-ref" className="dropdown-link">
                  useRef
                </Link>
              </li>
              <li>
                <Link to="/use-memo" className="dropdown-link">
                  useMemo
                </Link>
              </li>
            </ol>
          )}
        </div>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            Login
          </Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
