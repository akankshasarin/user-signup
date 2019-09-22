import React, { Component } from 'react'
import "../resources/sass/components/password-field.scss";
export class PasswordField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: ""
    };
    
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  handlePasswordChange(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }
  render() {
    const { name, id, labelText, helpText, autocomplete } = this.props;

    return (
      <React.Fragment>
        <div className="password-field">
          <input
            className="password-field__input"
            type={this.state.hidden ? "password" : "text"}
            name={name}
            id={id}
            onChange={this.handlePasswordChange}
            autoComplete={autocomplete}
            required
          />
          <label className="password-field__label" htmlFor={id}>
            {labelText}
          </label>
          <span className="password-field__toggle" onClick={this.toggleShow}>{this.state.hidden ? "Show" : "Hide"}</span>
          <div className="password-field__help-text password-field__help-text--is-hidden">
            {helpText}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default PasswordField
