import React, { Component } from 'react';
import axios from 'axios';
import { Nav, Navbar, Form, FormControl,NavDropdown,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Song extends Component {
    constructor(props) {
        super(props);

        
    }
    render() {
       
        return(
            <tr>
                {/* <td>{this.props.song.sid}</td> */}
                <td>{this.props.song.name}</td>
                <td>{this.props.song.dob}</td>
                <td>{this.props.song.song}</td>
                <td>{this.props.song.rate}</td>
                
                
            </tr>
        );
    }
}

class OtherPage1 extends  Component {
    constructor(props){
        super(props);
        this.state = {songs: []};

        this.fetchData = this.fetchData.bind(this);
        this.songList = this.songList.bind(this);
    }


    fetchData(){
        axios.get('/artists')
            .then(response => {
                console.log(response);
                
                this.setState({ songs: response.data.rows });
            })
            .catch(function (error){
                console.log(error);
            });
    }

    componentDidMount() {
        
        this.fetchData();
        this.timer = setInterval(() => this.fetchData(), 250);
    }
        
    songList() {

        return this.state.songs.map(function(currentSong, i){
            return (<Song song={currentSong} key={i} />);
            })
    }

    render(){
        const MyStyle = {
            width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "2%"
        }
        return (
            <div style={MyStyle}>
                <h3>Top 10 Artists</h3>
            
         <span>
         <Nav.Link  href="/artist/addartist"> <Button className="btn btn-success"  type="click" >
        <span className="zehnaseeb"> <font color="white">
            Add Artists 
          </font></span>
        </Button>
        </Nav.Link>
          {/* <Link to ="">  <div className="form-group">
                        <input type="submit" value="Add Artist" className="btn btn-primary" />
                    </div></Link> */}
         </span>
        

      
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            {/* <th>Track Number</th> */}
                            <th>Artist</th>
                            <th>Date of Birth</th>
                            <th>Songs</th>
                            <th>Rating</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.songList() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OtherPage1;