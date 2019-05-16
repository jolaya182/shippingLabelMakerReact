/* *
  title: Filler.js 

  date: 5/10/2019

  author:  javier olaya

  description: component that that adds styling to the div with a percentage number
         
 */
import React from 'react';
import style from '../../../../css/style.css'

const Filler = ({ percentage }) => {
  return (
    <div className="filler" style={{ width: `${percentage}%` }}>
    </div>
  );
}

export default Filler;