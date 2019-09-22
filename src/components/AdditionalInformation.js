import React, { Component } from "react";
// import TextField from "./TextField";
import CheckGroup from "./CheckGroup";
import CustomSelect from "./CustomSelect";
import MultiSelect from "./MultiSelect";
import CallToAction from "./CallToAction";

export class AdditionalInformation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.goToPage("officeAddress");
  };

  getPastYears = numberofYears => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const years = [];
    for (let i = 0; i <= numberofYears; i++) {
      let obj = {
        id: parseInt(currentYear) - i,
        value: parseInt(currentYear) - i
      };
      years.push(obj);
    }
    return years;
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <main className="container">
          <form
            className="form"
            name={`${values.userType}-registration`}
            noValidate
          >
            <CheckGroup
              title="I am Dealing in"
              name="category"
              helpText="help"
              eventHandler={handleChange}
              options={[
                {
                  id: "buy",
                  label: "Buy",
                  inputType: "checkbox"
                },
                {
                  id: "rent",
                  label: "Rent",
                  inputType: "checkbox"
                }
              ]}
            />

            <CheckGroup
              title="Property Type"
              name="propertyType"
              helpText="help"
              eventHandler={handleChange}
              options={[
                {
                  id: "residential",
                  label: "Residential",
                  inputType: "checkbox"
                },
                {
                  id: "commercial",
                  label: "Commercial",
                  inputType: "checkbox"
                }
              ]}
            />
            <CheckGroup
              title="Transaction Type"
              name="transactionType"
              helpText="help"
              eventHandler={handleChange}
              options={[
                {
                  id: "rentLease",
                  label: "Rent / Lease",
                  inputType: "checkbox"
                },
                {
                  id: "preLaunch",
                  label: "Pre-Launch",
                  inputType: "checkbox"
                },
                {
                  id: "originalBooking",
                  label: "Original Booking",
                  inputType: "checkbox"
                },
                {
                  id: "resale",
                  label: "Resale",
                  inputType: "checkbox"
                },
                {
                  id: "others",
                  label: "Others",
                  inputType: "checkbox"
                }
              ]}
            />
            <CheckGroup
              title="Types of Residential Property"
              name="residentialPropertyTypes"
              helpText="help"
              eventHandler={handleChange}
              options={[
                {
                  id: "multistoreyApartment",
                  label: "Multistorey Apartment",
                  inputType: "checkbox"
                },
                {
                  id: "builderFloorApartment",
                  label: "Builder Floor Apartment",
                  inputType: "checkbox"
                },
                {
                  id: "villa",
                  label: "Villa",
                  inputType: "checkbox"
                },
                {
                  id: "penthouse",
                  label: "Penthouse",
                  inputType: "checkbox"
                },
                {
                  id: "studioApartment",
                  label: "Studio Apartment",
                  inputType: "checkbox"
                },
                {
                  id: "payingGuest",
                  label: "Paying Guest",
                  inputType: "checkbox"
                },
                {
                  id: "hostel",
                  label: "Hostel",
                  inputType: "checkbox"
                }
              ]}
            />
            <CheckGroup
              title="Types of Commercial Property"
              name="commercialPropertyTypes"
              helpText="help"
              eventHandler={handleChange}
              options={[
                {
                  id: "commercialLand",
                  label: "Commercial Land",
                  inputType: "checkbox"
                },
                {
                  id: "commercialOfficeSpace",
                  label: "Commercial Office Space",
                  inputType: "checkbox"
                },
                {
                  id: "commercialShop",
                  label: "Commercial Shop",
                  inputType: "checkbox"
                },
                {
                  id: "commercialShowroom",
                  label: "Commercial Showroom",
                  inputType: "checkbox"
                },
                {
                  id: "warehouseGodown",
                  label: "Warehouse / Godown",
                  inputType: "checkbox"
                },
                {
                  id: "industrialLand",
                  label: "Industrial Land",
                  inputType: "checkbox"
                },
                {
                  id: "industrialBuilding",
                  label: "Industrial Building",
                  inputType: "checkbox"
                },
                {
                  id: "industrialShed",
                  label: "Industrial Shed",
                  inputType: "checkbox"
                },
                {
                  id: "officeInITParkSEZ",
                  label: "Office in IT Park / SEZ",
                  inputType: "checkbox"
                },
                {
                  id: "coworkingSpace",
                  label: "Co-working Space",
                  inputType: "checkbox"
                }
              ]}
            />
            <CustomSelect
              name="operatingSince"
              title="Operating Since"
              label="Operating Since"
              options={this.getPastYears(15)}
            />
            <CustomSelect
              name="expertiseIn"
              title="Expertise In"
              label="Expertise In"
              options={[
                {
                  id: "resalePremiumProperty",
                  value: "Resale Premium Property"
                },
                {
                  id: "bestNegotiatorForBuyers",
                  value: "Best Negotiator for Buyers"
                },
                { id: "newProjectLaunches", value: "New Project Launches" },
                { id: "preLaunchProjects", value: "Pre Launch Projects" },
                {
                  id: "reachToBestRentalPockets ",
                  value: "Reach to Best Rental Pockets "
                },
                {
                  id: "leaseCommercialProperties",
                  value: "Lease Commercial Properties"
                },
                { id: "other", value: "Other" }
              ]}
            />
            <MultiSelect
              name="banks"
              title="Select Bank"
              label="Select Bank"
              options={[
                { id: "iciciBank", value: "ICICI Bank" },
                { id: "licHfl", value: "LIC HFL" },
                { id: "bankOfBaroda", value: "Bank of Baroda" },
                { id: "indiabulls", value: "Indiabulls" },
                { id: "sbi", value: "State Bank of India" },
                { id: "citi", value: "Citi bank" },
                { id: "pnb", value: "Punjab National Bank" },
                { id: "dhfl", value: "DHFL" }
              ]}
            />
            <CallToAction
              label="Continue"
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

export default AdditionalInformation;
