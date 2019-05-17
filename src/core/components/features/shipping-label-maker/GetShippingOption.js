/* *
  title: GetShippingOption.js 

  date: 5/10/2019

  author:  javier olaya

  description: component that handles getting shipping options
         
 */
import React from 'react';
import propTypes from 'prop-types';
import Steps from './Steps';

const GetShippingOption = ({wizardContext, currentStep, handleChange, onAction, wizardAction  }) => {
  if (currentStep !== 2) return null;
  return (<div>
    Get Shipping Option
    <br></br>
    <label >Shipping </label><br></br>
    <select id="Shipping" type="text" name="shippingOption" onChange={handleChange} >
      <option onChange={handleChange} name="shippingOption" value="ground">ground</option>
      <option onChange={handleChange} name="shippingOption" value="priority">priority</option>
    </select><br></br>
{/*     <Steps onAction={onAction} wizardAction={wizardAction}></Steps>
 */}  </div>
  );
};

GetShippingOption.propTypes = {
  wizardContext: propTypes.object.isRequired,
  onAction: propTypes.func.isRequired
}
export default GetShippingOption;