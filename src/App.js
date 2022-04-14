import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // saveCard: [],
    };
  }

  // onInputChange = ({ target }) => { // controla o input e seta no state
  //   this.setState({ cardDescription: target.value })
  // }

  onInputChange = ({ target }) => {
    // controle genérico dos inputs
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  isSaveButtonDisabled() {
    const sumValue = 210;
    const maxPoints = 90;
    let { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const { cardName, cardDescription, cardImage, cardRare } = this.state;

    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);
    if (cardName
    && cardDescription
    && cardImage
    && cardRare
    && (cardAttr1 + cardAttr2 + cardAttr3) <= sumValue
    && cardAttr1 <= maxPoints
    && cardAttr1 >= 0
    && cardAttr2 <= maxPoints
    && cardAttr2 >= 0
    && cardAttr3 <= maxPoints
    && cardAttr3 >= 0) {
      return false;
    }
    return true;
  }

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
    } = this.state;

    return (
      <div>
        <h1>Adicionar Nova Carta</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
