import React from 'react';
 class Welcomeprop extends React.Component{
          render()
     {
     return <h1>The color is  {this.props.color} and model name is {this.props.model}</h1>
     }
 }
 export default Welcomeprop;