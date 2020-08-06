import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Routes/Home';
import CreateTodo123 from './Components/Artists/Addartist';
import Songs from './Components/Songs/AddSongs';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddSongs from './Components/Songs/AddSongs';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Route path ="/" component={Homepage}/>
        <Route path ="/artist/addartist" component={AddSongs}/>
         <Route path ="/addsongs" component={Songs} />
         
        </Router>
    </React.Fragment>
  );
}

export default App;
