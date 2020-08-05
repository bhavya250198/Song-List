import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './styles.css';
import axios from 'axios';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
 export default class CreateTodo123 extends Component {

    constructor(props) {
        super(props);

        this.onChangeArtistName = this.onChangeArtistName.bind(this);
        // this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
        this.onChangeRating=this.onChangeRating.bind(this);
        this.onChangeBio=this.onChangeBio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            dob: '',
            rate:'',
            bio:'',
            message:'',
        }
    }

    onChangeArtistName(e) {
        this.setState({
            name: e.target.value
        });
    }

    // onChangeDateOfBirth(e) {
    //     this.setState({
    //         dob: e.target.value
    //     });
    // }
  onChangeRating(e) {
    this.setState({
        rate: e.target.value
    });
}
onChangeBio(e) {
    this.setState({
            bio: e.target.value
    });
}

handleChange = date => {
    this.setState({
      dob: date
        
    });
  };

    
    onSubmit(e) {
        e.preventDefault();
        if(!this.state.name)
        {
            this.setState({message:"names cannot be null"});
        }
        else if(!this.state.dob)
        {
            this.setState({message:"Date of Birth cannot be null"});
        }
        else if(!this.state.rate)
        {
            this.setState({message:"Rate cannot be null"});
        }
        else if(!this.state.bio)
        {
            this.setState({message:"Bio cannot be null"});
        }
        else
        { 
            console.log(`Form submitted:`);
        console.log(`Artist Name: ${this.state.name}`);
        console.log(`Artist DOB: ${this.state.dob}`);
        console.log(`Artist Rate: ${this.state.rate}`);
        const artist = {
            name: this.state.name,
            dob: this.state.dob,
            rate: this.state.rate,
            bio:this.state.bio,
            todo_completed: this.state.todo_completed
        };
        axios.post('http://localhost:4000/add', artist)
            .then(res => console.log(res.data));
        
        this.setState({
            name: '',
            dob: '',
            rate:'',
            bio:'',
            todo_completed: false
        })}
       
    }

    render() {
        return (
            <div style={{marginTop: "41px",marginLeft: "429px",
              marginRight: "513px"}}>
                <h2>Add a new artist </h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Artist: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeArtistName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth: </label>
                        <br/>
                        <DatePicker
                        className="dates"
                         selected={this.state.dob}
                    
                         onChange={this.handleChange}
                         
                />
                       
                       
                        {/* <input 
                                type="text" 
                                className="form-control"
                                value={this.state.dob}
                                onChange={this.onChangeDateOfBirth}
                                /> */}
                    </div>
                   
                    <div className="form-group">
                        <label>Rating: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.rate}
                                onChange={this.onChangeRating}
                                />
                    </div>
                    <div className="form-group">
                        <label>Bio: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.bio}
                                onChange={this.onChangeBio}
                                />
                    </div>
                        <div>
                            {
                                this.state.message
                            }
                        </div>

                    <div className="form-group">
                        <input type="submit" value="Done" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}