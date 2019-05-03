import React from 'react';

const GetWeight = () =>{
  let weight;
  const s = e =>{
    weight = "";
  }
  return(<form>
    Get Weight
    <br></br>
    <label  >Weight </label><br></br>
    <input ref={input => weight=input}id="Weight" type="text"></input><br></br>
    </form>);
};

export default  GetWeight;