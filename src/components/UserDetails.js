import React, { Component } from "react";
import TextField from "./TextField";
import PasswordField from "./PasswordField";
import InternationalMobileField from "./InternationalMobileField";
import Radio from "./Radio";
import CallToAction from "./CallToAction";

export class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.goToPage("verify");
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <main className="container">
          <form className="form" name="user-registration" noValidate>
            <TextField
              inputType="text"
              name="name"
              id="name"
              labelText="Name"
              helpText="help"
              value={values.name}
              eventHandler={handleChange("name")}
              autocomplete="name"
            />
            <TextField
              inputType="email"
              name="email"
              id="email"
              labelText="Email"
              helpText="help"
              value={values.email}
              eventHandler={handleChange("email")}
              autocomplete="email"
            />
            <PasswordField
              name="password"
              id="password"
              labelText="Password"
              helpText="help"
              autocomplete="new-password"
            />
            <InternationalMobileField
              inputType="tel"
              name="mobile"
              id="mobile"
              labelText="Mobile"
              helpText="help"
              eventHandler={handleChange("mobile")}
            />
            <Radio
              displayType="inline"
              title="I am"
              name="userType"
              helpText="help"
              eventHandler={handleChange("userType")}
              selected={values.userType}
              options={[
                {
                  id: "individual",
                  label: "Buyer/Owner"
                },
                {
                  id: "agent",
                  label: "Agent"
                },
                {
                  id: "builder",
                  label: "Builder"
                }
              ]}
            />
            <div className="user-agreement">
              <span className="user-agreement__text">
                By clicking below, you agree to{" "}
              </span>
              <a
                href="hhtps://magicbricks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="user-agreement__link"
              >
                MagicBricks' T&amp;C
              </a>
            </div>
            <CallToAction
              label="Sign Up"
              type="button"
              color="primary"
              display="block"
              clickEvent={this.continue}
            />
          </form>
        </main>
      </React.Fragment>
    );
  }
}

export default UserDetails;
