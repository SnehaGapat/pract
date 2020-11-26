import React from 'react';
class Message extends React.Component{
    constructor(){
        super()
        this.state={
            msg :"Hello React Begginer",
            grt:"Namskar"
        }
    }
    onchangeMsg(){
        this.setState({
            msg:"Click Event Successfully occured"
        });
    }
    render(){
    return (
    <div>
        <h1>{this.state.msg}</h1>
       <i>{this.state.grt}</i> 
       <button onClick={()=>this.onchangeMsg()}>Subscribe</button>
        </div>)
    }
}
export default Message;