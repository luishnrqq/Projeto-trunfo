import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cards extends Component {
  render() {
    const { cards, deleteCardButton, cardTrunfo } = this.props;
    console.log(cardTrunfo);
    return (
      <div className="myCards">
        <h1>Suas cartas</h1>
        <section className="savedCards">
          {cards.map((carta) => (
            <div className="carta" key={ carta.name } id={ carta.name }>
              <p className="previewName">{carta.name}</p>
              <img src={ carta.cardImage } alt={ carta.name } />
              <p className="atr">
                Atributo 1___________________________
                {carta.cardAttr1}
              </p>
              <p className="atr">
                Atributo 2___________________________
                {carta.cardAttr2}
              </p>
              <p className="atr">
                Atributo 3___________________________
                {carta.cardAttr3}
              </p>
              <p className="atr">{carta.cardRare}</p>
              {carta.cardTrunfo
              && <p data-testid="trunfo-card" className="atr"> Super Trunfo</p>}
              <p className="description">{carta.description}</p>
              <button
                type="button"
                onClick={ deleteCardButton }
                data-testid="delete-button"
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

Cards.defaultProps = {
  cards: [],
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  deleteCardButton: PropTypes.func.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Cards;
