import React from 'react';
import Wizard from '../../wizard/Wizard';
import Confirm from './Confirm';
import GetReceiverAddress from './GetReceiverAddress';
import GetSenderAddress from './GetSenderAddress';
import GetShippingOption from './GetShippingOption';
import GetWeight from './GetWeight';
import ShippingLabel from './ShippingLabel';
import Progressbar from './Progressbar';
import ShippingOption from './ShippingOption';

export default class ShippingLabelMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      wizardContext: 0,
      toName: "",
      toStreet: "",
      toCity: "",
      toState: "",
      toZip: "",
      fromName: "",
      fromStreet: "",
      fromCity: "",
      fromState: "",
      fromZip: "",
      weight: 0,
      shippingOption: "ground",
      totalSteps: 5,
      cost:0,
      header:"Shipper Label Maker",
      prev:null,
      next:2,
      end:null,
    }
  }

  stepForward = props => {
    this.setState((state, props) => ({
      currentStep: state.currentStep + 1 >= state.totalSteps ? state.totalSteps : state.currentStep + 1,
      next: state.currentStep + 1 >= state.totalSteps ? null : 2,
      prev: state.currentStep + 1 > 0 ? 1 : null,
      end: state.currStep + 1 === state.totalSteps ? 3 : null
    }))
  }

  stepBack = props => {
    this.setState((state, props) => ({
      currentStep: state.currentStep - 1 <= 0 ? 0 : state.currentStep - 1,
      next: state.currentStep - 1 < state.totalSteps ? 2 : null,
      prev: state.currentStep - 1 <= 0 ? null : 1,
      end: state.currStep - 1 !== state.totalSteps ? null : 3
    }))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let { cost } = this.state;
    if (name === "weight") { cost = this.calculateWeight(value);  }
    this.setState((state, props) => ({ [name]: value, cost: cost }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { currentStep,
      wizardContext,
      toName,
      toStreet,
      toCity,
      toState,
      toZip,
      fromName,
      fromStreet,
      fromCity,
      fromState,
      fromZip,
      weight,
      shippingOption } = this.state;
    alert(currentStep,
      wizardContext,
      toName,
      toStreet,
      toCity,
      toState,
      toZip,
      fromName,
      fromStreet,
      fromCity,
      fromState,
      fromZip, weight,
      shippingOption);
  }

  calculateWeight = (weight) => {
    const shippingRate = 0.40;
    const { shippingOption } = this.state;
    return Math.round( (shippingRate * weight * (shippingOption === ShippingOption.ground ? 1 : 1.5))*100 )/100;
  }

  header = () => {
    return this.state.header;
  }

  onComplete = () => {
    return true;
  }

  getWizardContext = () =>{
    return {
      from:{
        name:this.state.fromName,
        street:this.state.fromStreet,
        city:this.state.fromCity,
        state:this.state.fromState,
        zip:this.state.fromZip
      },
      to:{
        name:this.state.toName,
        street:this.state.toStreet,
        city:this.state.toCity,
        state:this.state.toState,
        zip:this.state.toZip
      },
      weight:this.state.weight,
      shippingOption:this.state.shippingOption
    }
  }

  wizardAction = () =>{
    return {"prev":this.state.prev,"next":this.state.next, "end":this.state.end}
  }

  onAction = (event) => {
    event.preventDefault();
    const ident = event.target.id;
    if(ident=== "prev"){
      this.stepBack();
    }else if(ident === "next"){
      this.stepForward();
    }
  }

  render() {
    const { currentStep,  totalSteps } = this.state;
    const { handleSubmit, handleChange, header, onComplete, getWizardContext, onAction, wizardAction } = this;
    const curstate = this.state;
    const wizardContext = this.getWizardContext();
    const percentage = currentStep == 0 ? 0 : ((100 / totalSteps) * currentStep);
    let currStep1,currStep2,currStep3,currStep4,currStep5,currStep6;
      currStep1 = (<GetReceiverAddress
        wizardContext={getWizardContext()} 
        currentStep={currentStep}
        handleChange={handleChange}
        onAction={onAction}
        wizardAction={wizardAction()}
      >GetReceiverAddress </GetReceiverAddress>);

      currStep2 = (<GetSenderAddress
      wizardContext={getWizardContext()}
        currentStep={currentStep}
        handleChange={handleChange}
        onAction={onAction}
        wizardAction={wizardAction()}
      >GetSenderAddress </GetSenderAddress>);

      currStep3 = (<GetShippingOption
      wizardContext={getWizardContext()}
        currentStep={currentStep}
        shippingOption={this.state.shippingOption}
        handleChange={handleChange}
        onAction={onAction}
        wizardAction={wizardAction()}
      >GetShippingOption</GetShippingOption>);

      currStep4 = (<GetWeight
      wizardContext={getWizardContext()}
        currentStep={currentStep}
        weight={this.state.weight}
        handleChange={handleChange}
        onAction={onAction}
        wizardAction={wizardAction()}
      >GetWeight </GetWeight>);

      currStep5 = (<div><Confirm
      wizardContext={getWizardContext()}
        currentStep={currentStep}
        handleChange={handleChange}
        shippingData={curstate}
        onAction={onAction}
        wizardAction={wizardAction()}
      >Confirm </Confirm>
       </div>);

      currStep6 = (<ShippingLabel wizardContext={getWizardContext()}></ShippingLabel>);
      let stack = [currStep1,currStep2,currStep3,currStep4,currStep5,currStep6];

    return (
      <div>
        <Wizard 
          currentStep={currentStep}
          wizardContext={wizardContext}
          forwardButton={this.forwardButton}
          backButton={this.backButton}
          handleSubmit={handleSubmit}
          header={header}
          steps={stack}
          onComplete={onComplete}
        >
          <Progressbar percentage={percentage}></Progressbar>
        </Wizard>
      </div>
    )
  }
}