
import './App.css';
import './component/Greet';
import Greet from './component/Greet';
import ArrowGreet from './component/ArrowGreet';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
      <Greet/>
      <ArrowGreet/>
      <Welcome/>
    </div>
  );
}

export default App;
