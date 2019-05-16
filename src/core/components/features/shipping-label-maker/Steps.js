import React from 'react';
import propTypes from 'prop-types';

const Steps = ({ onAction, wizardAction }) => {
  return (<div>
    {
      (wizardAction.prev === 1) ? <div>
        <button id="prev"
          onClick={onAction}
          type="button"
        >
          prev
      </button>
      </div> : null}

    {(wizardAction.next === 2) ? <div>
      <button id="next"
        onClick={onAction}
        type="button"
      >
        next
      </button>
    </div> : null}
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