import React from 'react';

class ExpensesForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input type="number" data-testid="value-input" />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select data-testid="currency-input">
            <option value="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:
          <select data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input data-testid="description-input" />
        </label>
        <button
          type="submit"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default ExpensesForm;
