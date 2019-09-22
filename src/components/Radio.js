import React, { Component } from 'react'
import '../resources/sass/components/radio.scss'
export class Radio extends Component {

  render() {
    const { displayType, title, name, helpText, eventHandler, options, selected } = this.props;
    return (
      <React.Fragment>
        <div className={`radio radio--${displayType}`}>
          <div className="radio__title">{title}</div>
          <div className="radio__container">
            {
              options.map((option) => (
                <div className="radio__item" key={option.id}>
                  <input className="radio__input" type="radio" name={name} id={option.id} defaultValue={option.id} onChange={eventHandler} defaultChecked={option.id === selected}/>
                  <label htmlFor={option.id} className="radio__label">{option.label}</label>
                </div>
              ))
            }
          </div>
          <div className="radio__help-text">
            {helpText}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Radio
