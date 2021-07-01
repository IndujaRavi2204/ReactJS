import React from "react"
import axios from 'axios'
import SearchApi from './result'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class GenreResult extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imdbId : [],
            count : 5
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            count : this.state.count + 5
        })
    }
    findMovie = () =>{
        const options = {
            method: 'GET',
            url: 'https://data-imdb1.p.rapidapi.com/movie/'+this.props.link+'/'+this.props.gen+'/',
            headers: {
              'x-rapidapi-key': '0287cf982fmsh8bf5f855596fa21p172535jsn3f7bb1ded664',
              'x-rapidapi-host': 'data-imdb1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then((response) => {
            this.setState({
                imdbId : response.data
                //movie : response.data
            }); 
            console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
        
    }
    componentDidMount(){
        console.log("Called Mount")
        this.findMovie();
    }
    componentDidUpdate(prevProps){
        console.log("Called Update")
        if(this.props.gen !== prevProps.gen){
            this.findMovie();
        }
    }
    render(){
        const { imdbId } = this.state;
        const genre = this.props.result
        //console.log(this.props.gen)
        console.log("Selected Genre",genre);
        
    return(
        <div>
        
        {imdbId[genre] ? (
            imdbId[genre].slice(0,this.state.count).map((id) => {
                return(
                    <SearchApi id = {id.imdb_id} key = {id.imdb_id} movie = {id.title} />
            )
            })
        ) : (
            <div className="loader"></div>
        )}
        {imdbId[genre] ? (
            <Box mx="auto">
            <Button variant="contained" color="primary" style={{ marginLeft : "640px" }} onClick={this.handleClick}>
            More
          </Button></Box>) :(<p></p>)
        }
        </div>
    )}
}
export default GenreResult