import React from 'react';
import PrimarySearchAppBar from '../NavigationBar/NavigationBar';
import CreateTodo123 from '../Artists/Addartist';
import Songs from '../Songs/AddSongs';
import {BrowserRouter as Router,Route} from "react-router-dom";


class Addsongs extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={

        }
    }
    render()
    {
        return (
            <React.Fragment>
              <Router>
              <PrimarySearchAppBar/>
              <CreateTodo123/>
              {/* <Route path = "/addsongs" component ={Songs}/> */}
              </Router>
            </React.Fragment>
          );
    }
}
 

export default AddSongs;