import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input id="name" type="text" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea id="description" data-testid="description-input" />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input id="attr1" type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input id="attr2" type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input id="attr3" type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="image">
          image
          <input id="image" type="text" data-testid="image-input" />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select id="raridade" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="check">
          Super Trybe Tryunfo
          <input id="check" type="checkbox" data-testid="trunfo-input" />
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
