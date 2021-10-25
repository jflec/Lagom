const Navbar = () => {
  return (
    <div id="navbar-container">
      <h1 id="logo">Lagom</h1>

      <ul id="navbar-list">
        <li className="navbar-list-item">
          <a href=" ">clothing</a>
        </li>
        <li className="navbar-list-item">
          <a href=" ">furniture</a>
        </li>
        <li className="navbar-list-item">
          <a href=" ">electronics</a>
        </li>
        <li className="navbar-list-item">
          <a href=" ">automotive</a>
        </li>
      </ul>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,288L80,240C160,192,320,96,480,90.7C640,85,800,171,960,176C1120,181,1280,107,1360,69.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}
    </div>
  );
};

export default Navbar;
