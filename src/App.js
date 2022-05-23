import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Cards from './components/Cards';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => this.enableSaveButton(),
    );
  };

  enableSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const sumAttr = 210;
    const limit = 90;
    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && Number(cardAttr1) >= 0
      && Number(cardAttr1) <= limit
      && Number(cardAttr2) >= 0
      && Number(cardAttr2) <= limit
      && Number(cardAttr3) >= 0
      && Number(cardAttr3) <= limit
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sumAttr)
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.addNewCard();
    this.verifySuperTrunfo();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  deleteCardButton = ({ target }) => {
    const { cards } = this.state;
    this.verifySuperTrunfo();
    this.setState({
      cards: cards.filter((carta) => carta.name !== target.parentNode.id),
    });
  };

  verifySuperTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  addNewCard = () => {
    this.setState((prevState) => ({
      cards: [
        ...prevState.cards,
        {
          name: prevState.cardName,
          description: prevState.cardDescription,
          cardAttr1: prevState.cardAttr1,
          cardAttr2: prevState.cardAttr2,
          cardAttr3: prevState.cardAttr3,
          cardImage: prevState.cardImage,
          cardRare: prevState.cardRare,
          cardTrunfo: prevState.cardTrunfo,
        },
      ],
    }));
  };

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
      isSaveButtonDisabled,
      cards,
      hasTrunfo,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="previewCartas">
          <Form
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
            addNewCard={ this.addNewCard }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
          />
        </div>
        <div className="Salvas">
          <Cards cards={ cards } deleteCardButton={ this.deleteCardButton } />
        </div>
      </div>
    );
  }
}

export default App;
