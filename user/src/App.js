import React from 'react';
import UserForm from './component/Form'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        data: '',
        // users: []
    }
}



  render(){
  return (
    <div className="App">
     <UserForm />
    </div>
  );
}
}

export default App;
