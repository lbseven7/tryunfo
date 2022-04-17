import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';
import ListCards from './components/ListCards';
// import ListCards from './components/ListCards';

class App extends React.Component {
  constructor() {
    super();
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cardGrounp: [],
      hasTrunfo: false,
    };
  }

  // // REquisito 7
  // modifyCard = () => {
  //   const { cardGrounp } = this.state;
  //   cardGrounp.filter((element) => element
  //   && this.setState({ cardTrunfo:
  // <p data-testid="trunfo-card">Você já tem um Super Trunfo em seu baralho</p> }));
  //   console.log(cardTrunfo);
  // }

  // onInputChange = ({ target }) => { // controla o input e seta no state
  //   this.setState({ cardDescription: target.value })
  // }

  // controle genérico dos inputs
  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  // ajuda do Ewerson
  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      cardTrunfo } = this.state;

    // console.log('chamando onSaveButtonClick');
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((prevState) => ({
      cardGrounp: [...prevState.cardGrounp, card] }));

    this.setState(({ cardGrounp }) => ({
      hasTrunfo: cardGrounp.find((element) => element.cardTrunfo),
    }));

    this.setState({
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
    });
  }

  // Ajuda de Jean questão 5
  isSaveButtonDisabled = () => {
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
      cardGrounp,
      hasTrunfo,
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
          isSaveButtonDisabled={ this.isSaveButtonDisabled() } // ajuda de Jean
          onSaveButtonClick={ this.onSaveButtonClick } // ajuda de Diego
          cardGrounp={ cardGrounp }
          hasTrunfo={ hasTrunfo }
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

        <ListCards
          cardGrounp={ cardGrounp }
        />

        {/* <ListCards cards={ cardGrounp } /> */}
      </div>
    );
  }
}

export default App;
