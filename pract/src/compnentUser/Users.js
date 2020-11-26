import React from 'react';
import User from './User'
class Users extends React.Component{
        state={
        users:[
       {name:"Serill" ,age :20},
       {name:"Virusn",age:40},
       {name:"willson",age:30}
           ],
           title:"Users List "

    };

     makeAgeYoung=()=>{
         console.log("button is clicked");
         this.setState({
             users:[ 
            {name:"Serill" ,age :10},
             {name:"Virusn",age:30},
             {name:"willson",age:20}
            ]
         })
     }
    render()
    {
        return (
            <div>
            <h2>{this.state.title}</h2>
            <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
            <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
            <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
            <br></br>
            <button onClick={this.makeAgeYoung}>ChangeToBeSeems</button>
            </div>
        )
    }
}
export default Users;
