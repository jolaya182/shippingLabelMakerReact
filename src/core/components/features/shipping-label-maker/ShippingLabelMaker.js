/* *
  title: ShippingLabelMarker.js 

  date: 5/10/2019

  author:  javier olaya

  description: component that handles the main logic for accessing and organizing the shipping labels
         
 */
import React from 'react';
import Wizard from '../../wizard/Wizard';
import Confirm from './Confirm';
import GetReceiverAddress from './GetReceiverAddress';
import GetSenderAddress from './GetSenderAddress';
import GetShippingOption from './GetShippingOption';
import GetWeight from './GetWeight';
import Progressbar from './Progressbar';
import ShippingOption from './ShippingOption';

export default class ShippingLabelMaker extends React.Component {
 /* define the state properties of the shippingLabelMarker */
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
      weight: 1,
      shippingOption: "ground",
      totalSteps: 5,
      cost:0,
      header:"Shipper Label Maker",
      prev:null,
      next:2,
      end:null,
    }
  }
 /* 
  @description method tha updates the current step goinf forward 
  and current state of the buttons 

  @param props

  */
  stepForward = props => {
    this.setState((state, props) => ({
      currentStep: state.currentStep + 1 >= state.totalSteps ? state.totalSteps : state.currentStep + 1,
      next: state.currentStep + 1 >= state.totalSteps ? null : 2,
      prev: state.currentStep + 1 > 0 ? 1 : null,
      end: state.currStep + 1 === state.totalSteps ? 3 : null
    }))
  }

   /* 
  @description method tha updates the current step  going backwards and 
  current state of the buttons 

  @param props

  */
  stepBack = props => {
    this.setState((state, props) => ({
      currentStep: state.currentStep - 1 <= 0 ? 0 : state.currentStep - 1,
      next: state.currentStep - 1 < state.totalSteps ? 2 : null,
      prev: state.currentStep - 1 <= 0 ? null : 1,
      end: state.currStep - 1 !== state.totalSteps ? null : 3
    }))
  }

 /* 
  @description callback for when a word is typed into the text input box 

  @param event object

  */
  handleChange = (event) => {
    const { name, value } = event.target;
    let { cost } = this.state;
    if (name === "weight") { cost = this.calculateWeight(value);  }
    this.setState((state, props) => ({ [name]: value, cost: cost }));
  }

  /* 
  @description calculates the cost of shipping based othe rates  

  @param number

  @return number

  */
  calculateWeight = (weight) => {
    const shippingRate = 0.40;
    const { shippingOption } = this.state;
    return Math.round( (shippingRate * weight * (shippingOption === ShippingOption.ground ? 1 : 1.5))*100 )/100;
  }

  /* 
  @description returns the header name of the application  

  @return number

  */
  header = () => {
    return this.state.header;
  }

  /* 
  @description method that allows for the creation for the label  

  @return bool

  */
  onComplete = () => {
    return this.state.currentStep === this.state.totalSteps;
  }

  /* 
  @description returns the shipping option type, 
  weight and receiver and sender address  

  @return obj

  */
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

  /* 
  @description returns the prev next and end state for the buttons  

  @return obj

  */  
  wizardAction = () =>{
    return {"prev":this.state.prev,"next":this.state.next, "end":this.state.end}
  }

  /* 
  @description returns the header name of the application
  
  @param event object

  */
  onAction = (event) => {
    const action = {
      "prev":1,
      "next":2,
      "end": 3
    }
   event.preventDefault();
   const ident = event.target.id;
   if( ident == action.prev ){
     this.stepBack();
   }else if(ident == action.next){
     this.stepForward();
   }
  }

  render() {
    /* get methods and property values */
    const { currentStep,  totalSteps } = this.state;
    const { handleSubmit, handleChange, header, onComplete, getWizardContext, onAction, wizardAction } = this;
    const wizardContext = getWizardContext();
    const wizardaction = wizardAction();

    /* calculate progress bar px percentage */
    const percentage = currentStep == 0 ? 0 : ((100 / totalSteps) * currentStep);

    /* create an array of steps */
    let currStep1,currStep2,currStep3,currStep4,currStep5;
      currStep1 = (<GetReceiverAddress
        wizardContext={wizardContext} 
        currentStep={currentStep}
        handleChange={handleChange}
        onAction={onAction}
        wizardAction={wizardaction}
      >GetReceiverAddress </GetReceiverAddress>);

      currStep2 = (<GetSenderAddress
        wizardContext={wizardContext}
        currentStep={currentStep}
        handleChange={handleChange}
        onAction={onAction}
        wizardAction={wizardaction}
      >GetSenderAddress </GetSenderAddress>);

      currStep3 = (<GetShippingOption
        wizardContext={wizardContext}
        currentStep={currentStep}
        handleChange={handleChange}
        onAction={onAction}
        wizardAction={wizardaction}
      >GetShippingOption</GetShippingOption>);

      currStep4 = (<GetWeight
        wizardContext={wizardContext}
        currentStep={currentStep}
        weight={this.state.weight}
        handleChange={handleChange}
        onAction={onAction}
        wizardAction={wizardaction}
      >GetWeight </GetWeight>);

      currStep5 = (<Confirm
      wizardContext={wizardContext}
        currentStep={currentStep}
        onAction={onAction}
        wizardAction={wizardaction}
      >Confirm </Confirm>
       );

      let stack = [currStep1,currStep2,currStep3,currStep4,currStep5];
      let step = stack.map((elem, indx)=>{
        return <div key={indx}>{elem}</div>
      });

    return (
      <div>
        <Wizard 
          wizardContext={wizardContext}
          currentStep={currentStep}
          header={header}
          steps={step}
          onComplete={onComplete}
          onAction={onAction}
          wizardAction={wizardaction}
        >
          <Progressbar percentage={percentage}></Progressbar>
        </Wizard>
      </div>
    )
  }
}