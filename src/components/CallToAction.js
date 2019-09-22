import React, { Component } from 'react'
import '../resources/sass/components/cta.scss'

export class CallToAction extends Component {
  render() {
    const { label, type, color, display, clickEvent } = this.props
    return (
      <React.Fragment>
        <div className="cta">
          <button 
            type={type} 
            onClick={clickEvent} 
            className={
              `cta__btn cta__btn--${color} ${display ? 'cta__btn--'+display : ''}`
            }
          >
            {label}
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default CallToAction
