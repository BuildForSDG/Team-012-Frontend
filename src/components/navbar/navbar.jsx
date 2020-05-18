import React, { Fragment } from 'react';
import './navbar.scss';

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isNavOpen: true};
  }

  handleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const MenuActive = this.state.isNavOpen? '': 'is-active';
    const MenuOpen = this.state.isNavOpen? '': 'mobile-nav';
    return (
      <Fragment>
        <div className="page-wrapper">
        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="menubar">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo"/>
            <div className={`menu-toggle ${MenuActive}`} id="mobile-menu" onClick={this.handleNav}>  {/** add class is-active */}
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`no-search ${MenuOpen}`}>  {/** add class mobile-nav */}
              <li className="menu-item"><a href="https://reactjs.org">Home</a></li>
              <li className="menu-item"><a href="https://reactjs.org">About</a></li>
              <li className="menu-item"><a href="https://reactjs.org">Work</a></li>
              <li className="menu-item"><a href="https://reactjs.org">Careers</a></li>
              <li className="menu-item"><a href="https://reactjs.org">Contact Us</a></li>
              {/* <i className="fas fa-search" id="search-icon"></i>
              <input className="search-input" type="text" placeholder="Search.."> */}
            </ul>
          </nav>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default NavBarComponent;