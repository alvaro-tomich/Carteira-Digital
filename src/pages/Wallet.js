import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { savedEmail } = this.props;
    return (
      <div>
        <Header email={ savedEmail } />
        <ExpensesForm />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savedEmail: state.user.email,
});

Wallet.propTypes = {
  savedEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
