
import './App.css';
import './component/Greet';
import Greet from './component/Greet';
import ArrowGreet from './component/ArrowGreet';
import Welcome from './component/Welcome';
import Welcomeprop from './component/Welcomeprop';
import Hello from './component/Hello';
import Greetprop from './component/Greetprop';
import HellowithoutJsx from './component/HelloWithoutJsx';

function App() {
  return (
    <div className="App">
      <Greet/>
      <ArrowGreet/>
      <Welcome/>
      <Welcomeprop color='Red' model='Apple17'/>

     
      <Hello/>
      <HellowithoutJsx/>
      <Greetprop name='Mr.Mac' desig='Developer' >
        <p>This is the child props</p>
      </Greetprop>
      <Greetprop name='Mrs.Helena' desig='Design Engginer' >
        <button onClick="https://www.w3schools.com/react/default.asp">Active</button>
      </Greetprop>
    </div>
  );
}

export default App;
