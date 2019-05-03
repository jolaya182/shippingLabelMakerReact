import React from 'react';

const GetSenderAddress = () =>{
  let name, street, city, state, zip;
  const s = e =>{
    name = "";
    street = ""; 
    city = "";
    state = ""; 
    zip = "";
  }

  return(<form>
    Get Sender Address
    <br></br>
    <label >name </label><br></br>
    <input ref={input => name=input} id="name" type="text"></input><br></br>
    <label > street</label><br></br>
    <input ref={input => street=input} id="street" type="text"></input><br></br>
    <label > city</label><br></br>
    <input ref={input => city=input} id="city" type="text"></input><br></br>
    <label  > state</label><br></br>
    <input ref={input => state=input} id="state" type="text"></input><br></br>
    <label  > zip</label><br></br>
    <input ref={input => zip=input} id="zip" type="text"></input><br></br>
    </form>);
};

export default  GetSenderAddress;