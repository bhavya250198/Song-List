import React from 'react';
import PrimarySearchAppBar from '../NavigationBar/NavigationBar';
import CreateTodo123 from '../Artists/Addartist';
import OtherPage1 from '../Artists/artist.component';
import OtherPage from '../Songs/song.component';
import Songs from '../Songs/AddSongs';
import {BrowserRouter as Router,Route} from "react-router-dom";


class Homepage extends React.Component{
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
              <OtherPage1/>
              <OtherPage/>
              </Router>
            </React.Fragment>
          );
    }
}
 

export default Homepage;