import React, { Component } from 'react';
import axios from 'axios';
import { Nav, Navbar, Form, FormControl,NavDropdown,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
// import history from './History';


class Song extends Component {
    constructor(props) {
        super(props);
            this.changeRating=this.changeRating.bind(this);
        
    }
    changeRating( newRating, name ) {
        axios.post('http://localhost:4000/songs/rate',{ newrating: newRating,
        sid:this.props.song.sid

    }
        )
            .then(response =>{ console.log('rating response',response.data);
            if(response.data.errno)
            {
                alert('Could not rate');
            }
            }).catch(function(err)
            {
                console.log(err);
            }
        
            );
      }
   
    render() {
       
        return(
            <tr>
                <td>{this.props.song.sid}</td>
                <td>{this.props.song.song}</td>
                <td>{this.props.song.dor}</td>
                <td>{this.props.song.artist}</td>
                <td> <StarRatings
            starDimension="20px"
            starSpacing="5px"
          rating={this.props.song.rate}
          starRatedColor="gold"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        /></td>
                
                
            </tr>
        );
    }
}

class OtherPage extends  Component {
    constructor(props){
        super(props);
        this.state = {songs: []};
        
        this.fetchData = this.fetchData.bind(this);
        this.songList = this.songList.bind(this);
    }


    fetchData(){
        axios.get('http://localhost:4000/songs')
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
                <h3>Top 10 Songs</h3>
                
                <Nav.Link href="/addsongs"> <Button className="btn btn-success"  >
         <font color="white">
            Add Songs 
          </font>
        </Button>
        </Nav.Link>

      
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Track Number</th>
                            <th>Title</th>
                            <th>Date of Release</th>
                            <th>Artist</th>
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

export default OtherPage;