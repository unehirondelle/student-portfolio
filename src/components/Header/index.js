import React from 'react';

const Header = () => {
  return (
    // Navigation Bar
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/index">About Me</a>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/portfolio"
                >Portfolio <span className="sr-only">(current)</span></a
              >
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/socials">Socials</a>
            </li>  
          </ul>
        </div>
        {/* <!-- /.navbar-collapse --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </nav>
  )
}

export default Header