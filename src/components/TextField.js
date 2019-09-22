import React, { Component } from "react";
import "../resources/sass/components/textfield.scss";
export class TextField extends Component {
  render() {
    const { inputType, name, id, labelText, helpText, value, eventHandler, autocomplete } = this.props;
    return (
      <React.Fragment>
        <div className="textfield">
          <input
            className="textfield__input"
            type={inputType}
            name={name}
            id={id}
            defaultValue={value}
            autoComplete={autocomplete}
            onChange={eventHandler}
            required
          />
          <label className="textfield__label" htmlFor={id}>
            {labelText}
          </label>
          <div className="textfield__help-text">
            {helpText}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TextField;