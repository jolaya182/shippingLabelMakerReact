/* *
  title: GetSenderAddress.js 

  date: 5/10/2019

  author:  javier olaya

  description: component that handles getting the senders address
         
 */
import React from 'react';
import propTypes from 'prop-types';
import Steps from './Steps';

const GetSenderAddress = ({ wizardAction, currentStep, handleChange, onAction, wizardContext }) => {
  let { from } = wizardContext;
  if (currentStep !== 1) return null;
  return (<div>
    Get Sender Address
    <br></br>
    <label >name </label><br></br>
    <input onChange={handleChange} name="fromName" id="fromName" type="text" value={from.fromName} placeholder={from.fromName}></input><br></br>
    <label > street</label><br></br>
    <input onChange={handleChange} name="fromStreet" id="fromStreet" type="text" value={from.fromStreet} placeholder={from.fromStreet}></input><br></br>
    <label > city</label><br></br>
    <input onChange={handleChange} name="fromCity" id="fromCity" type="text" value={from.fromCity} placeholder={from.fromCity}></input><br></br>
    <label  > state</label><br></br>
    <input onChange={handleChange} name="fromState" id="fromState" type="text" value={from.fromState} placeholder={from.fromState}></input><br></br>
    <label  > zip</label><br></br>
    <input onChange={handleChange} name="fromZip" id="fromZip" type="text" value={from.fromZip} placeholder={from.fromZip}></input><br></br>
{/*     <Steps onAction={onAction} wizardAction={wizardAction}></Steps>
 */}  </div>);
};

GetSenderAddress.propTypes = {
  wizardContext: propTypes.object.isRequired,
  onAction: propTypes.func.isRequired
}
export default GetSenderAddress;