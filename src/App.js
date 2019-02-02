import React, { Component } from 'react';
import './App.css';
import FindPerson from './FindPerson.js';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Persons from './Persons.js';
import ListLove from './ListLove.js';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div> 
          <Switch>    
          <Route path="/"   component={FindPerson} exact />
          <Route path="/FindPerson"   component={FindPerson}/>
          <Route path="/Persons"   component={Persons}  />
          <Route path="/ListLove"  component={ListLove}  />
          </Switch>
          <br></br>
          {/* <AppBar position="static">
               <Toolbar>
                   <Typography variant="title" color="default"  >
                       Bgroup72
                   </Typography>
               </Toolbar>
          </AppBar> */}
        </div>
      </Router>
      </div>
    )
  }
}

export default App;
