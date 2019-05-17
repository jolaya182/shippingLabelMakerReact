import React from 'react';
import propTypes from 'prop-types';

const Confirm = ({ wizardContext, currentStep, onAction, wizardAction }) => {
  if (currentStep !== 4) return null;
  return (<div>
    Confirm if the form is correct before going to the next step
    <br></br>
    {Object.keys(wizardContext.to).map(function (key, index) {
      let st = key + ": " + wizardContext.to[key];
      return <div key={index}>{st}</div>
    })}
    {Object.keys(wizardContext.from).map(function (key, index) {
      let st = key + ": " + wizardContext.from[key];
      return <div key={index}>{st}</div>
    })}
    <div>{"weight: " + wizardContext.weight}</div>
    <div>{"shippingOption: " + wizardContext.shippingOption}</div>
  </div>);
};

Confirm.propTypes = {
  wizardContext: propTypes.object.isRequired,
  onAction: propTypes.func.isRequired
}
export default Confirm;