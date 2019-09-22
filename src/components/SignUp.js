import React, { Component } from "react";
import UserDetails from "./UserDetails";
import OTP from "./OTP";
import Success from "./Success";
import Header from "./Header";
import AdditionalInformation from "./AdditionalInformation";
import OfficeAddress from "./OfficeAddress";

export class SignUp extends Component {

  state = {
    page: "signup",
    name: "",
    email: "",
    password: "",
    isdCode: "50",
    mobile: "",
    userType: "",
    otp: ""
  };

  goToPage = pageName => {
    if (typeof page)
      this.setState({
        page: pageName
      });
  };

  // Handle Fields Change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  readStorage = () => {
    const lsObj = JSON.parse(localStorage.getItem("info"));
    if (lsObj) {
      for (let key in lsObj) {
        if (lsObj.hasOwnProperty(key)) {
          const val = lsObj[key];
          this.setState({
            key: val
          });
        }
      }
    }
  };

  render() {
    const { name, email, isdCode, mobile, userType, page } = this.state;
    const values = { name, email, isdCode, mobile, userType };
    localStorage.setItem("info", JSON.stringify(this.state));

    // eslint-disable-next-line default-case
    switch (page) {
      case "signup":
        return (
          <React.Fragment>
            <Header title="Sign Up" />
            <UserDetails
              goToPage={this.goToPage}
              handleChange={this.handleChange}
              values={values}
            />
          </React.Fragment>
        );
      case "verify":
        return (
          <React.Fragment>
            <Header
              title="Verify"
              backButtonUrl="signup"
              goToPage={this.goToPage}
            />
            <OTP
              goToPage={this.goToPage}
              handleChange={this.handleChange}
              values={values}
            />
          </React.Fragment>
        );
      case "success":
        return (
          <React.Fragment>
            <Header
              title="Success"
              backButtonUrl="signup"
              goToPage={this.goToPage}
            />
            <Success />
          </React.Fragment>
        );
      case "agentRegistration":
        return (
          <React.Fragment>
            <Header
              title="Agent Registration"
              backButtonUrl="signup"
              goToPage={this.goToPage}
            />
            <AdditionalInformation
              goToPage={this.goToPage}
              handleChange={this.handleChange}
              values={values}
            />
          </React.Fragment>
        );
      case "officeAddress":
        return (
          <React.Fragment>
            <Header
              title="Office Address"
              backButtonUrl={
                userType === "agent"
                  ? "agentRegistration"
                  : userType === "builder"
                  ? "builderRegistration"
                  : ""
              }
              goToPage={this.goToPage}
            />
            <OfficeAddress />
          </React.Fragment>
        );

      case "builderRegistration":
        return (
          <React.Fragment>
            <Header
              title="Builder Registration"
              backButtonUrl="signup"
              goToPage={this.goToPage}
            />
            <AdditionalInformation
              goToPage={this.goToPage}
              handleChange={this.handleChange}
              values={values}
            />
          </React.Fragment>
        );
    }
  }
}

export default SignUp;
