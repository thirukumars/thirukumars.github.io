function Navbar(props) {
  return (
    <nav className={`container`}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-3">
          <img src="/logo.png" className={`img-fluid logo_icon`} />
        </div>
        <div className="col-md-9 d-flex justify-content-center align-items-center">
          <ul className="d-flex">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Projects</li>
            <li>Carrers</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        nav {
          padding: 20px;
          font-family: "Poppins";
        }
        ul {
          list-style: none;
          margin: 0px;
        }
        li {
          display: flex;
          justify-content: center;
          padding-left: 2rem;
        }
        .logo_icon {
          height: 50px;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
