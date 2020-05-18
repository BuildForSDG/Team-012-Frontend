import React, { Fragment } from 'react';
import './landing.scss';
import CardsComponent from '../../components/card/card.jsx';
import image from '../../assets/1.jpg';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardJSON : [
        {
          title: 'Online Farmer Market',
          text: 'We bring the food directly form its source to you. Cheaper and Fresher',
          image,
          buttonText: 'Go Food Shopping'
        },
        {
          title: 'Facilities For Farmers',
          text: 'We provide farmers with access to credit facilites, investors, lands and education on good farmig practices',
          image,
          buttonText: 'Fund A farmer'
        },
        {
          title: 'Elite Men',
          text: 'We bring the experienced heads to the farmers, educate them on technologies and climate effects',
          image,
          buttonText: 'Volunteer'
        }
      ]
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Fragment>
        <div className="home">
          <div className="container">
            <section>
              <h1>Eradicating Hunger, Providing Food</h1>
              <p>Join in saving lives, changing lives and feeding dreams.</p>
            </section>
            <div className="overlay">
            </div>
          </div>

          <div className="solutions">
            <h2>Solutions We Provide</h2>
            <div className="card-container">
              {this.state.cardJSON.map((item, index) => {
                return <CardsComponent item={item} key={index}/>
              })}
            </div>

            
          </div>
      </div>
      </Fragment>
    )
  }
}
