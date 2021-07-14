
import Header from './components/Header';
import Employees from './components/Eployees';
import Text from './components/Text';
import React from 'react';
class App extends React.Component {
  constructor(){
    super();
  }
  render(){
  return (
    <div className="container">
             <Header />
              <p>  Bonjour tout le monde, aujourd'hui nous somme le 12 juillet 2021</p>
              <Text/>
             <Employees/>
    </div>
  );}
}

export default App;
