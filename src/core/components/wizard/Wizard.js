import React from 'react';
import Steps from '../features/shipping-label-maker/Steps'

 const Wizard = ({ currentStep=0,  wizardContext=0, stepForward=f=>f, stepBack=f=>f }) =>{
  let sb = stepBack;
  let sf = stepForward;
  return (
  <div>
    {wizardContext}
    <button onClick={sb}>stepBack</button>
    <button onClick={sf}>stepForward</button>
  </div>
  );
 }
  export default Wizard; 