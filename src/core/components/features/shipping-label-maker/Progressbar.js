/* *
  title: Progressbar.js 

  date: 5/10/2019

  author:  javier olaya

  description: component that containers the filler for the progress bar 
         
 */
import React from "react";
import Filler from './Filler';
import style from '../../../../css/style.css'

const Progressbar = ({ percentage }) => {
  return (
    <div className={"progressBar"}>
      <Filler percentage={percentage}></Filler>

    </div>
  );
}

export default Progressbar;