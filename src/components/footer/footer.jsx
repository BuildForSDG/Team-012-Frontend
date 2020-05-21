import React from 'react';
// import React, { Fragment } from 'react';
import './footer.scss';

class FooterComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      // <Fragment>
      <footer className="footer">
        <h2>Contact Us</h2>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Gmail</p>
        <h2>Join Our Cause</h2>
      </footer>
      // </Fragment>
    )
  }
}

export default FooterComponent;