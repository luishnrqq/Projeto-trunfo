import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    const toggleCheckBox = (
      <input
        type="checkbox"
        name="cardTrunfo"
        id="cardTrunfo"
        checked={ cardTrunfo }
        onChange={ onInputChange }
        data-testid="trunfo-input"
      />
    );

    return (
      <form className="fomrularioTodo" action="">
        Nome
        <input
          type="text"
          name="cardName"
          id="cardName"
          value={ cardName }
          onChange={ onInputChange }
          data-testid="name-input"
        />
        Descrição
        <textarea
          name="cardDescription"
          id="cardDescription"
          cols="30"
          rows="10"
          maxLength="100"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
        />
        Atributo 1
        <input
          type="number"
          name="cardAttr1"
          id="cardAttr1"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        Atributo 2
        <input
          type="number"
          name="cardAttr2"
          id="cardAttr2"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        Atributo 3
        <input
          type="number"
          name="cardAttr3"
          id="cardAttr3"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        Imagem
        <input
          type="text"
          name="cardImage"
          id="cardImage"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        Raridade
        <select
          name="cardRare"
          id="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Super Raro</option>
        </select>
        Super Trunfo
        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : toggleCheckBox}
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
