import React, { Component } from "react";
import icon from "../resources/dist/icons/icons.svg";
import CallToAction from "./CallToAction";
import "../resources/sass/components/otp.scss";

export class OTP extends Component {
  
  continue = (e) => {
    const {userType} = this.props.values;
    console.log(userType);
    e.preventDefault();
    // eslint-disable-next-line default-case
    switch (userType) {
      case "individual":
        this.props.goToPage("success");
        break;
      case "agent":
        this.props.goToPage("agentRegistration");
        break;
      case "builder":
        this.props.goToPage("builderRegistration");
        break;
    }
  };

  back = e => {
    e.preventDefault();
    this.props.goToPage("signup");
  };
  render() {
    const { values, handleChange } = this.props;
    const editIcon = `${icon}#icon-arrow-left`;
    const resendIcon = `${icon}#icon-arrow-left`;
    const callIcon = `${icon}#icon-arrow-left`;

    return (
      <React.Fragment>
        <main className="container">
          <form className="form" name="otp-verification">
            <div className="otp">
              <div className="otp__header">
                <div className="otp__desc">
                  Enter 3 digit Verification Code sent on
                </div>
                <div className="otp__phone">
                  {values.mobile ? values.mobile : "0000000000"}
                </div>
                <div className="otp__edit ico" onClick={this.back}>
                  <svg>
                    <use xlinkHref={editIcon} />
                  </svg>
                </div>
              </div>
              <div className="otp__field">
                <input
                  type="tel"
                  name="otp"
                  id="otp"
                  className="otp__input"
                  maxLength="6"
                  onChange={handleChange("otp")}
                />
              </div>
              <CallToAction
                label="Continue"
                type="button"
                color="primary"
                display="block"
                clickEvent={this.continue}
              />
            </div>
          </form>
          <div className="otp__fail">
            <div className="otp__fail__desc">
              Didn’t get the verification code?
            </div>
            <div className="otp__fail__action">
              <div className="otp__resend">
                <div className="otp__resend__icon ico">
                  <svg>
                    <use xlinkHref={resendIcon} />
                  </svg>
                </div>
                <div className="otp__resend__text">Resend Code</div>
              </div>
              <div className="otp__resend">
                <div className="otp__resend__icon ico">
                  <svg>
                    <use xlinkHref={callIcon} />
                  </svg>
                </div>
                <div className="otp__resend__text">Verify on Call</div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default OTP;
