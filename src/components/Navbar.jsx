/* eslint-disable react/prop-types */
const Navbar = ({ setTag }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="" onClick={() => setTag("")}>
            Recipfy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setTag("Asian")}
                >
                  Asian
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setTag("Pakistani")}
                >
                  Pakistani
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setTag("Italian")}
                >
                  Italian
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setTag("Japanese")}
                >
                  Japanese
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
