import React from 'react';
import PrimarySearchAppBar from '../NavigationBar/NavigationBar';
import CreateTodo123 from '../Artists/Addartist';
import OtherPage1 from '../Artists/artist.component';
import OtherPage from '../Songs/song.component';


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
              <PrimarySearchAppBar/>
              <OtherPage1/>
              <OtherPage/>
            </React.Fragment>
          );
    }
}
 

export default Homepage;