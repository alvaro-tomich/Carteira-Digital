import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { savedEmail } = this.props;
    return <Header email={ savedEmail } />;
  }
}

const mapStateToProps = (state) => ({
  savedEmail: state.user.email,
});

Wallet.propTypes = {
  savedEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
