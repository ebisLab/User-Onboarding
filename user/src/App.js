import React from 'react';
import Form from './component/Form'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        data: ''
    }
}



  render(){
  return (
    <div className="App">
     <Form />
    </div>
  );
}
}

export default App;
