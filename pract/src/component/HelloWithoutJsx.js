import React from 'react';
const HellowithoutJsx=()=>{
    
    return React.createElement('div',
    {id:'hello' ,className:'elementclass'},
    React.createElement('h1','null','Example of Create element'));
}
export default HellowithoutJsx;
//some times insted of id and class we pass null