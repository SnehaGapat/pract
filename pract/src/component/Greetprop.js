import React from 'react';
const Greetprop= props =>{
    console.log(props);          //it helps to see what are the props in console of browser
  return (
  <div> <h1>Hello {props.name} works as an  {props.desig}</h1>
      {props.children}
      </div>
 
    )

}
export default Greetprop;