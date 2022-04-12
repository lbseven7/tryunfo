import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
    };
  }

  // onInputChange = ({ target }) => { // controla o input e seta no state
  //   this.setState({ cardDescription: target.value })
  // }

  onInputChange = ({ target }) => {
    // controle genérico
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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
    } = this.state;

    return (
      <form className="form">
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input
            id="attr1"
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input
            id="attr2"
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input
            id="attr3"
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="image">
          image
          <input
            id="image"
            type="text"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select
            id="raridade"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ this.onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="check">
          Super Trybe Tryunfo
          <input
            id="check"
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            value={ cardTrunfo }
            // checked="cardTrunfo"
            onChange={ this.onInputChange }
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled="isSaveButtonDisabled"
          onClick="onSaveButtonClick"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
}.isRequired;

export default Form;
