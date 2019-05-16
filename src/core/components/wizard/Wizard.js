import React from 'react';
import propTypes from 'prop-types';
const Wizard = ({ children, currentStep = 0,  handleSubmit, header, steps, onComplete }) => {

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