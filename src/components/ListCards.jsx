import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListCards extends React.Component {
  render() {
    const { cardGrounp } = this.props;
    return (
      <>
        <h3>My Cards List:</h3>
        {cardGrounp.map((card, index) => (
          <Card
            key={ index }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />
        ))}
      </>
    );
  }
}

ListCards.propTypes = {
  cardGrounp: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.string,
      cardAttr2: PropTypes.string,
      cardAttr3: PropTypes.string,
      cardImage: PropTypes.string,
      cardRare: PropTypes.string,
      cardTrunfo: PropTypes.bool,

    }),
  ).isRequired,
};

export default ListCards;
