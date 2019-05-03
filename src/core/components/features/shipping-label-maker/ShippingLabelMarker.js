import React from 'react';
import Wizard from '../../wizard/Wizard';
import Confirm from './Confirm';
import GetReceiverAddress from './GetReceiverAddress';
import GetSenderAddress from './GetSenderAddress';
import GetShippingOption from './GetShippingOption';
import GetWeight from './GetWeight';

export default class ShippingLabelMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      wizardContext:0,
      toName:"",
      toStreet:"",
      toCity:"",
      toState:"",
      toZip:"",
      fromName:"",
      fromStreet:"",
      fromCity:"",
      fromState:"",
      fromZip:"",
      weight:0,
      shippingOption:1
    }
  }
  stepForward = props => {
    this.setState((state, props) => ({
      currentStep: state.currentStep + 1 >= 4? 4 : state.currentStep + 1 
    }))
  }

  stepBack = props => {
    this.setState((state, props) => ({
      currentStep: state.currentStep - 1 <= 0 ? 0 : state.currentStep - 1
    }))
  }
  render(){
    let currentStep = this.state.currentStep;
    let wizardContext = this.state.wizardContext;
    let currStep;
    if(currentStep===0){
      currStep = (<GetReceiverAddress>GetReceiverAddress {wizardContext}</GetReceiverAddress>);
    }else if(currentStep===1){
      currStep = (<GetSenderAddress>GetSenderAddress {wizardContext}</GetSenderAddress>);
    }else if(currentStep===2){
      currStep = (<GetShippingOption>GetShippingOption {wizardContext}</GetShippingOption>);
    }else if(currentStep===3){
      currStep = (<GetWeight>GetWeight {wizardContext}</GetWeight>);
    }else if(currentStep===4){
      currStep = (<Confirm>Confirm {wizardContext}</Confirm>);
    }else{
      currStep = (<div>Steps2 {wizardContext}</div>);
    }
    

    return (
      <div>
        Shipping Label Marker
        <Wizard  currentStep={currentStep}  wizardContext={currStep}   stepForward={this.stepForward} stepBack={this.stepBack}></Wizard>  
      </div>
    )
  }
}