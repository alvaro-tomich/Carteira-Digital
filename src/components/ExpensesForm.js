import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpenses, fetchCurrenciesThunk } from '../actions/index';
import getCurrencies from '../services/getCurrencies';
import '../styles/expenses-form.css';

class ExpensesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(event) {
    event.preventDefault();
    const { expenses, expensesRead } = this.props;

    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const expensesObj = [{
      id: expensesRead.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: await getCurrencies(),
    }];
    expenses(expensesObj);
    this.setState({
      value: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value } = this.state;
    return (
      <form className="expenses-form">
        <label htmlFor="value">
          Valor:
          <input
            value={ value }
            id="value"
            name="value"
            type="number"
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            onChange={ this.handleChange }
            data-testid="currency-input"
            name="currency"
            id="currency"
          >
            {
              currencies.map((curr) => (
                <option
                  key={ curr.code }
                  value={ curr.code }
                >
                  { curr.code }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            onChange={ this.handleChange }
            data-testid="method-input"
            name="method"
            id="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            onChange={ this.handleChange }
            data-testid="tag-input"
            name="tag"
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            onChange={ this.handleChange }
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expensesRead: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expenses: (expenses) => (
    dispatch(saveExpenses(expenses))),
  fetchCurrencies: () => (
    dispatch(fetchCurrenciesThunk())),
});

ExpensesForm.propTypes = ({
  fetchCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
  expensesRead: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
