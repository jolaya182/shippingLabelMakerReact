import React from 'react';

const ShippingLabel = ({ wizardContext }) => {
  return (<div>
    ShippingLabel
    congratulations here is your shipping label:
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
}
export default ShippingLabel;