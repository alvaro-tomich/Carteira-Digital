import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
    if (event.target.name === 'email') {
      this.setState({
        email: event.target.value,
      });
    }
    if (event.target.name === 'password') {
      this.setState({
        password: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    const { addEmailToGlobalStage, history } = this.props;
    addEmailToGlobalStage(email);
    console.log(history);
    history.push('/carteira');
  }

  render() {
    const minPasswordCharacters = 6;
    const { email, password } = this.state;
    const emailCheck = /^[a-z-0-9]+@[a-z]+.[a-z]+$/.test(email);
    const passwordCheck = password.length < minPasswordCharacters;
    const isDisabled = passwordCheck || !emailCheck;

    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email-input">
          <input
            name="email"
            type="email"
            data-testid="email-input"
            placeholder="Digite seu email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          <input
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ isDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmailToGlobalStage: (email) => (
    dispatch(saveEmail(email))
  ),
});

Login.propTypes = {
  addEmailToGlobalStage: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
