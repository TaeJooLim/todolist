import './App.css';
import { Component } from 'react';
import ClassApp from './ClassApp';
import FunctionApp from './FunctionApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="testdiv">
          <ClassApp />
          <FunctionApp />
        </div>
      </div>
    );
  }
}

export default App;
