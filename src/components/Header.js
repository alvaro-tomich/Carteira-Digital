import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.calculateTotalExpenses = this.calculateTotalExpenses.bind(this);
  }

  calculateTotalExpenses = () => {
    const { data } = this.props;
    const sum = data.reduce((acc, curr) => (
      acc + (curr.value * curr.exchangeRates[curr.currency].ask)), 0);
    return sum;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ `Email: ${email}` }</p>
        <p data-testid="total-field">{ `Total: ${this.calculateTotalExpenses()}`}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);
