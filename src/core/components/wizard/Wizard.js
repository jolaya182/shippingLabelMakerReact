import React from 'react';
import propTypes from 'prop-types';
const Wizard = ({ wizardContext, currentStep, handleSubmit, header, steps, onComplete, children}) => {

  return (
    <div>
      {children}
      <h3>{header()}</h3>
      step: {currentStep}
      <form onSubmit={handleSubmit}>
        {steps[currentStep]}
      </form>
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