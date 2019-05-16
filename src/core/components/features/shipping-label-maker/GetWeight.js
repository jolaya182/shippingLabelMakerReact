import React from 'react';
import propTypes from 'prop-types';
import Steps from './Steps';

const GetWeight = ({ wizardAction, onAction, weight, currentStep, handleChange }) => {
  if (currentStep !== 3) return null;
  return (<div>
    Get Weight
    <br></br>
    <label  >Weight </label><br></br>
    <input id="weight" type="text" onChange={handleChange} name="weight" value={weight} ></input><br></br>
    <Steps onAction={onAction} wizardAction={wizardAction}></Steps>
  </div>);
};

GetWeight.propTypes = {
  wizardContext: propTypes.object.isRequired,
  onAction: propTypes.func.isRequired
}
export default GetWeight;