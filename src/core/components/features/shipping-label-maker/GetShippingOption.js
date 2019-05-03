import React from 'react';

const GetShippingOption = () =>{
  let shipOption;
  const s = e =>{
    shipOption = "";
  }
  return(<form>
    Get Shipping Option
    <br></br>
    <label >Shipping </label><br></br>
    <select ref={input => weight=input}id="Shipping" type="text">
      <option value="ground">ground</option>
      <option value="priority">priority</option>
    </select><br></br>
    </form>);
};

export default  GetShippingOption;