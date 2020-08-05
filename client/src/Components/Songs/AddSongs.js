import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Homie from './Home';
import { Multiselect } from 'multiselect-react-dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// class Artists extends Component {
//     constructor(props) {
//         super(props);

        
//     }
//     render() {
       
//         return(
//             <tr>
//                 {/* <td>{this.props.song.sid}</td> */}
//                 <td>{this.props.art.name}</td>
                
                
//             </tr>
//         );
//     }
// }





  class Songs extends Component {

    constructor(props) {
        super(props);
        // this.state = {artists: []};
        // this.artList = this.artList.bind(this);
        // this.fetchData = this.fetchData.bind(this);
        this.onChangeSongName = this.onChangeSongName.bind(this);
        // this.onChangeSongDateofRelease = this.onChangeSongDateofRelease.bind(this);
        // this.onChangeArtistName=this.onChangeArtistName.bind(this);
        this.onChangeRating=this.onChangeRating.bind(this);
        this.onSelect=this.onSelect.bind(this);
        // this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state = {
            song: '',
            dor: '',
            artistname:'',
            rate:0,
            options:[],
            csid:'',
            artistlist:[],
            message:'',
            // todo_priority: '',
            todo_completed: false
        }
        
    } 
    
    componentDidMount()
    {
        axios.get('http://localhost:4000/getartist')
            .then(response => {
                console.log(response);
                
                this.setState({ options: response.data.rows });
                console.log(this.state.options);
            })
            .catch(function (error){
                console.log(error);
            });
    }
    
    clear(){
        this.setState({dor: null});
      }
        
    // artList() {

    //     return this.state.artists.map(function(currentName, i){
    //         return (<Artists art={currentName} key={i} />);
    //         })
    // }


    onChangeSongName(e) {
        this.setState({
            song: e.target.value
        });
    }

    handleChange = date => {
        this.setState({
          dor: date
        });
      };
    // onChangeSongDateofRelease(e) {
    //     this.setState({
    //         dor: e.target.value,
    //         dor:date
    //     });
    // }
    
	
//     onChangeArtistName(e) {
//       this.setState({
//           artistname: e.target.value
//       });
//   }
  onChangeRating(e) {
    this.setState({
        rate: e.target.value
    });
}
onSelect(selectedList, selectedItem) {
    this.setState(
        {
            artistlist:selectedList
        }
    )
    
   console.log(selectedList) ;
}
 
// onRemove(selectedList, removedItem) {
//     console.log(selectedItem) ;
// }

    // onChangeTodoPriority(e) {
    //     this.setState({
    //         todo_priority: e.target.value
    //     });
    // }

    onSubmit(e) {
        e.preventDefault();
        console.log('Hello');
        if(!this.state.song)
        {
            this.setState({message:"names cannot be null"});
        }
        else if(!this.state.dor)
        {
            this.setState({message:"Date of Birth cannot be null"});
        }
        else if(!this.state.rate)
        {
            this.setState({message:"Rate cannot be null"});
        }
        else
        {
        
        console.log(`Form submitted:`);
        console.log(`Song Name: ${this.state.song}`);
        console.log(`Song Date of Release: ${this.state.dor}`);
        console.log(`Artist Name: ${this.state.artistname}`);
        console.log(`Rating: ${this.state.rate}`);
        // console.log(`Todo Priority: ${this.state.todo_priority}`);
        const songs = {
            song: this.state.song,
            dor: this.state.dor,
            rate: this.state.rate,
            todo_completed: this.state.todo_completed
        };
        axios.post('http://localhost:4000/add123',songs)
            .then(res => console.log(res.data));
        };
            console.log(this.state.artistlist);
        axios.get('http://localhost:4000/newsongsid')
        .then(response => {
            console.log(response);
            
            this.setState({ csid: response.data.rows[0].max+1});
            console.log('first');
            console.log(this.state.csid);
            var i;
            for(i=0;i<this.state.artistlist.length;i++)
        {   
            // console.log(this.state.csid);
            axios.post('http://localhost:4000/addsongartist',{ssid:this.state.csid,caid:this.state.artistlist[i].id})
            .then(res => console.log(res.data));
        // this.setState({
        //     song: '',
        //     dor: '',
        //     artistname:'',
        //     rate:0,
        //     // todo_priority: '',
        //     todo_completed: false
        // })
    };
        })
        .catch(function (error){
            console.log(error);
        });
        
        
    this.setState({
        song: '',
        dor: '',
        artistname:'',
        rate:0,
        // todo_priority: '',
        todo_completed: false
    })
    }
    
    
    // componentDidMount()
    // {
    //     this.fetchData();
    //     this.timer=setInterval(()=>this.fetchData(),250);
    // }

    render() {
        return (
            <div style={{marginTop: "41px",marginLeft: "429px",
              marginRight: "513px"}}>
                <h2>Add a new song </h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Song Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.songname}
                                onChange={this.onChangeSongName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Date of Release: </label>
                        <br/>
                        <DatePicker
                        className="dates"
                         selected={this.state.dor}
                    onChange={this.handleChange}
                    dateFormat="yyyy-mm-dd" />
                    
                        {/* <input
                          type="text" 
                                className="form-control"
                                onClick={this.clear}
                                value={this.state.dor}
                                onChange={this.onChangeSongDateofRelease}
                                /> */}
                    </div>
                    <div className="form-group">
                        <label>Artist: </label>
                        <Multiselect
                        options={ this.state.options } // Options to display in the dropdown
                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name"
                                type="text" 
                                className="form-control"
                                // value={this.state.artistname}
                                // onChange={this.onChangeArtistName}
                                />
                            
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
                    <div>
                            {
                                this.state.message
                            }
                        </div>

                    <div className="form-group">
                        <input type="submit" value="Add Song" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
export default Songs;