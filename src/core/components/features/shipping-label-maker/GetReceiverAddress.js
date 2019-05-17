/* *
  title: GetReceiverAddress.js 

  date: 5/10/2019

  author:  javier olaya

  description: component that handles getting the receivers address 
         
 */
import React from 'react';
import propTypes from 'prop-types';
import Steps from './Steps';

const GetReceiverAddress = ({ wizardAction, currentStep, handleChange, onAction, wizardContext }) => {
  let { to } = wizardContext;
  if (currentStep !== 0) return null;
  return (<div >
    Get Receiver Address
    <br></br>
    <label > name</label><br></br>
    <input onChange={handleChange} name="toName" id="toName" type="text" value={to.toName} placeholder={to.toName}></input><br></br>
    <label > street</label><br></br>
    <input onChange={handleChange} name="toStreet" id="toStreet" type="text" value={to.toStreet} placeholder={to.toStreet}></input><br></br>
    <label > city</label><br></br>
    <input onChange={handleChange} name="toCity" id="toCity" type="text" value={to.toCity} placeholder={to.toCity}></input><br></br>
    <label > state</label><br></br>
    <input onChange={handleChange} name="toState" id="toState" type="text" value={to.toState} placeholder={to.toState}></input><br></br>
    <label > zip</label><br></br>
    <input onChange={handleChange} name="toZip" id="toZip" type="text" value={to.toZip} placeholder={to.toZip}></input><br></br>
{/*     <Steps onAction={onAction} wizardAction={wizardAction}></Steps>
 */}  </div>
  );
};

GetReceiverAddress.propTypes = {
  wizardContext: propTypes.object.isRequired,
  onAction: propTypes.func.isRequired
}
export default GetReceiverAddress;