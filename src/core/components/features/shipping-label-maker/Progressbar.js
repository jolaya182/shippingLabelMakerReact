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