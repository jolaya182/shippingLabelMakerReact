import React from 'react';
import style from '../../../../css/style.css'

const Filler = ({ percentage }) => {
  return (
    <div className="filler" style={{ width: `${percentage}%` }}>
    </div>
  );
}

export default Filler;