import React from "react";
import axios from "axios";
import Home from "../pages/Home";
import '../styles/Nav.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class Upcoming extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            upcoming_movie : [],
            count : 15,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            count : this.state.count + 15
        })
    }
    componentDidMount() {  // loader, lifecycle , key props, no data & loading, activation color 
        const options = {
            method: 'GET',
            url: 'https://data-imdb1.p.rapidapi.com/movie/order/upcoming/',
            headers: {
                'x-rapidapi-key': '0287cf982fmsh8bf5f855596fa21p172535jsn3f7bb1ded664',
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com'
            }
        };
        axios.request(options).then((response) => {  
            this.setState({
                upcoming_movie : response.data["Movies Upcoming"]
            })   
        }).catch(function (error) {
	        console.error(error);
        });
    }
    render(){

        return(
            <div>
            <h1>Coming soon...</h1>
            <div className="grid-container">
                {this.state.upcoming_movie.length > 0 ? 
                    (this.state.upcoming_movie.slice(0,this.state.count).map((movie) => {
                    return(
                        <Home key = {movie.imdb_id} title ={movie.title} release = {movie.release} />
                    );
                    }) ) : (<div className="loader"></div>)
                }
            </div>
                {this.state.upcoming_movie.length > 0 ? (
                <Box mx="auto">
                <Button variant="contained" color="primary" style={{ marginLeft : "640px" }} onClick={this.handleClick}>
                More
              </Button></Box>) : (<p></p>) 
                }
            </div>
        )
    }
}
export default Upcoming;