import React from "react"
import '../styles/Nav.css'
import axios from 'axios'
import SearchApi from './result'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : " ",
            loader : false,
            times : 0,
            imdbId : ['tt0086250'],
            count : 5,
            movie : ['Scarface'],
            id : [],
            selected : ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(){
        this.setState({
            count : this.state.count + 5
        })
    }
    handleChange(event){ 
        this.setState({
            title : event.target.value,
           
        });
    }
    handlebutton(id,movie){
        this.setState({
            id : id,
            selected : movie,
        })
    }
    findId = event => {
        event.preventDefault();
        this.setState({
            count : 5,
            times : 1,
            loader : false,
            id : []
        })
        const options = {
            method: 'GET',
            url: 'https://data-imdb1.p.rapidapi.com/movie/imdb_id/byTitle/'+this.state.title+'/',
            headers: {
                'x-rapidapi-key': '0287cf982fmsh8bf5f855596fa21p172535jsn3f7bb1ded664',
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com'
            }
        };
        axios.request(options).then((response) => {
            if(response.data){
                this.setState({
                    imdbId : response.data.Result.map((arr) => arr.imdb_id),
                    movie : response.data.Result.map((arr) => arr.title)
                }); 
            }
            else{
                this.setState({
                    imdbId : [],
                    id : []
                });
            }  
            this.setState({
                loader : true,
            })
            //console.log("findid : ", this.state.imdbId)
        }).catch(function (error) {
            console.error(error);
        }); 
        
    };
    
    render(){
        const { imdbId } =this.state;
        console.log("Rendered");
    return(
        <div>
        <form className="search" onSubmit={this.findId}>
            <input className="searchbox" type="text" placeholder="Search for a movie..." onChange ={this.handleChange}  />   
        </form>
        
        {this.state.loader ? 
        (imdbId.length >0 ? (
            <ul className="unordered">
            {imdbId.slice(0,this.state.count).map((id , index) => (
                <li><button onClick = {() => this.handlebutton(id,this.state.movie[index])}>{this.state.movie[index]}</button></li>
            ))}</ul>
        ) : (
            <h3>No results found</h3>
        )) : (this.state.times === 0 ? (<SearchApi id = {this.state.imdbId} key = {this.state.imdbId} movie = {this.state.movie} />) 
        : (<div className="loader"></div>)
        )}
        {imdbId.length >1 ? (
            <Box mx="auto">
            <Button variant="contained" color="primary"  onClick={this.handleClick}>
            More
          </Button></Box>) :(<p></p>)
        }
        {this.state.id.length !== 0 &&
            <SearchApi id = {this.state.id} key = {this.state.id} movie = {this.state.selected} />
        }
       
        </div>
    );}
}
export default Search