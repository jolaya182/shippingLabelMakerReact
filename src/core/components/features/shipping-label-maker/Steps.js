 /* *
  title: Steps.js 

  date: 5/10/2019

  author:  javier olaya

  description: component that handles placing the buttons for the wizard
         
 */
import React from 'react';
import propTypes from 'prop-types';

const Steps = ({ onAction, wizardAction }) => {
  return (<div>
    {
      (wizardAction.prev === 1) ?<button id="prev"
          onClick={onAction}
          type="button"
        >
          prev
      </button>: null}

    {(wizardAction.next === 2) ? <button id="next"
        onClick={onAction}
        type="button"
      >
        next
      </button>: null}
    {
      (wizardAction.end === 3) ? <div>
      </div> : null
    }
  </div>
  )
};

Steps.propTypes = {
  onAction: propTypes.func.isRequired
}

export default Steps;