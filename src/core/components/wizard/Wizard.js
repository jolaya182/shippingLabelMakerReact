import React from 'react';
import propTypes from 'prop-types';
import Steps from '../features/shipping-label-maker/Steps'; 
import ShippingLabel from '../features/shipping-label-maker/ShippingLabel';
import style from '../../../css/style.css';


const Wizard = ({ wizardContext, currentStep, header, steps, onComplete, onAction,wizardAction}) => {

  return (
    <div>
    <h3>{header()}</h3>
    <div>{"step:"+ currentStep}</div>
      {(onComplete() === false) ? (<div>     
      <form className="form">
        <div>{steps}</div>     
        <Steps onAction={onAction} wizardContext={wizardContext} wizardAction={wizardAction}>
        </Steps>
      </form>
      </div>) :  (<div className="form"><ShippingLabel wizardContext={wizardContext} currentStep={currentStep}></ShippingLabel></div>)}
    </div>
  );
}
Wizard.propTypes = {
  header: propTypes.func.isRequired,
  steps: propTypes.array.isRequired,
  wizardContext: propTypes.object.isRequired,
  onComplete: propTypes.func.isRequired
}
export default Wizard; 