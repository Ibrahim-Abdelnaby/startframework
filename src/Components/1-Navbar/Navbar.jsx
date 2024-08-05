import "./navbar.css";
export default function Navbar() {
  return (
    <>
      <header id="header" className="fixed top-0 left-0 right-0">
        <div className="container">
          <nav className="flex justify-between items-center py-5">
            {/* Logo */}
            <h5 className="font-bold text-3xl uppercase">Start Framework</h5>
            {/* Menu Links */}
            <ul className="flex gap-5">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
