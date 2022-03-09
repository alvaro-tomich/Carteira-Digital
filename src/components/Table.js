import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';
import '../styles/table.css';

class Table extends React.Component {
  render() {
    const { expenses, deleteCurrentExpense } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((curr) => (
              <tr key={ curr.id }>
                <td>{curr.description}</td>
                <td>{curr.tag}</td>
                <td>{curr.method}</td>
                <td>{Number(curr.value).toFixed(2)}</td>
                <td>{curr.exchangeRates[curr.currency].name}</td>
                <td>{Number(curr.exchangeRates[curr.currency].ask).toFixed(2)}</td>
                <td>
                  {
                    Number(
                      (curr.exchangeRates[curr.currency].ask * curr.value).toFixed(2),
                    )
                  }
                </td>
                <td>Real</td>
                <div className="button-content">
                  <td>
                    <button type="button" className="edit">
                      <img src="https://trybe-wallet.surge.sh/static/media/editIcon.7adc7d91.svg" alt="edit-icon" />
                    </button>
                  </td>
                  <td>
                    <button
                      className="remove"
                      data-testid="delete-btn"
                      type="button"
                      onClick={ () => deleteCurrentExpense(curr.id) }
                    >
                      <img src="https://trybe-wallet.surge.sh/static/media/trashIcon.eea42727.svg" alt="remove-icon" />
                    </button>
                  </td>
                </div>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCurrentExpense: (id) => (
    dispatch(deleteExpense(id))
  ),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  deleteCurrentExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
