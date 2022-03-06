import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ `Email: ${email}` }</p>
        <p data-testid="total-field">Despesa Total: R$ 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;
