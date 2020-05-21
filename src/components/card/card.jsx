import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './card.scss';


const CardDisplay = (props) => {
  const {title, text, image, buttonText } = props.item;
  // eslint-disable-next-line no-console
  console.log(title, text, image, buttonText);
  return (
    <Fragment>
      <Card>
        <CardImg top width="100%" src={image} alt="Card cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>{text}</CardText>
          <Button>{buttonText}</Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default CardDisplay;

CardDisplay.propTypes = {
  item: PropTypes.any
}