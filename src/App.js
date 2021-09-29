import React from 'react';
import './App.css';
import Tenants from './components/Tenants';
import Properties from './components/Properties';

class App extends React.Component{
  state = {
    properties: [
      {id: 1,
      name: 'ABC House'},
      {id: 2,
      name: 'PQR Villa'},
      {id: 3,
      name: 'XYZ Mansion'}
    ]
  }
  render(){
    return(
      <div>
        <Properties properties = {this.state.properties}/>
        <Tenants />
      </div>
    );
  }
}

export default App;
