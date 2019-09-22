import React, { Component } from 'react';
import CallToAction from "./CallToAction";
import icon from "../resources/dist/icons/icons.svg";
import '../resources/sass/components/success.scss';

export class Success extends Component {
  render() {
    const tickIcon = `${icon}#icon-cross`;
    return (
      <React.Fragment>
        <main className="container">
          <div className="success__header">
            <div className="success__icon ico">
              <svg>
                <use xlinkHref={tickIcon} />
              </svg>
            </div>
            <div className="success__title">Thank You</div>
          </div>
          <div className="success__body">
            <div className="success__message">You have Registered Successfully.</div>
          </div>
          <CallToAction
            label="Login Now"
            type="button"
            color="primary"
            clickEvent={this.continue}
          />
        </main>

      </React.Fragment>
    )
  }
}

export default Success
