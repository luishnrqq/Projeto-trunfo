import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Qualcarta from './Qualcarta.jpg';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="carta">
        <p data-testid="name-card" className="previewName">{ cardName }</p>
        <img src={ cardImage || Qualcarta } alt={ cardName } data-testid="image-card" />
        <div className="arround-border">
          <p data-testid="attr1-card" className="atr">
            Atributo 1 -----------------------
            {' '}
            <span>{ cardAttr1 }</span>
          </p>
          <p data-testid="attr2-card" className="atr">
            Atributo 2 ------------------------
            {' '}
            <span>{ cardAttr2 }</span>
          </p>
          <p data-testid="attr3-card" className="atr">
            Atributo 3 -----------------------
            {' '}
            <span>{ cardAttr3 }</span>
          </p>
          <p data-testid="rare-card" className="atr">{ cardRare }</p>
          {cardTrunfo && <p data-testid="trunfo-card" className="trunfo">Super Trunfo</p>}
        </div>
        <p data-testid="description-card" className="description">{ cardDescription }</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
