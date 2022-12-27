import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
      <>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <div className="container">
          <p data-testid="description-card">
            Descrição:
            {cardDescription}
          </p>
          <p data-testid="attr1-card">
            Primeiro atributo:
            {cardAttr1}
          </p>
          <p data-testid="attr2-card">
            Segundo atributo:
            {cardAttr2}
          </p>
          <p data-testid="attr3-card">
            Terceiro atributo:
            {cardAttr3}
          </p>
          <p data-testid="rare-card">
            Raridade:
            {cardRare}
          </p>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : undefined }
        </div>
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.bool,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
