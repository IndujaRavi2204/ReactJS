import React from "react";
import axios from 'axios';
import GenreResult from './filterResult';
import Button from '@material-ui/core/Button';

class Genre extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Genre : [],
            selectedGenre : "",
            selectedYear : new Date().getFullYear(),
            rating : "",
            popularity : "",
            //gen: new Date().getFullYear(),
            //link : "byYear",
            //result : "Movies "+new Date().getFullYear(),
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleRatingClick = this.handleRatingClick.bind(this);
        this.handlePopularityClick = this.handlePopularityClick.bind(this);
    }
    handleChange(event){
        this.setState({
            selectedGenre : event.target.value,
            rating : "",
            popularity : "",
            selectedYear : 0,
            //link : "byGen",
            //gen : event.target.value,
            //result : "Movies "+event.target.value,
        });
    }
    handleChangeYear(event){
        if(this.state.selectedGenre.length>0){
            this.setState({
                //gen : "byGen/"+this.state.selectedGenre,
                //link : "byYear/"+event.target.value,
                //result : "Movies "+ event.target.value+"--"+this.state.selectedGenre,
                rating : "",
                popularity : "",
            })
        }
        else{
        this.setState({
            selectedYear : event.target.value,
            rating : "",
            popularity : "",
            //link : "byYear",
            //gen : event.target.value,
            //result : "Movies "+event.target.value
        })}
    }
    handleRatingClick(event){
        this.setState({
            rating : "byRating",
            selectedYear : 0,
            selectedGenre : "",
            //gen : "byRating",
            //link : "order",
            //result : "Movie Order By Rating",
        });
    }
    handlePopularityClick(event){
        this.setState({
            popularity : "byPopularity",
            rating : "",
            selectedYear : 0,
            selectedGenre : "",
            //gen : "byPopularity",
            //link : "order",
            //result : "Movie Order By Popularity"
        });
    }
    componentDidMount(){   
        const options = {
          method: 'GET',
          url: 'https://data-imdb1.p.rapidapi.com/genres/',
          headers: {
            'x-rapidapi-key': '0287cf982fmsh8bf5f855596fa21p172535jsn3f7bb1ded664',
            'x-rapidapi-host': 'data-imdb1.p.rapidapi.com'
          }
        };
        
        axios.request(options).then((response) => {
            this.setState({Genre : response.data.Genres.map((gen) => gen.genre)});
            //console.log(this.state.Genre);
        }).catch(function (error) {
            console.error(error);
        });
    }

    render(){
        //console.log(this.state.selectedGenre);
        const year = []
        for(var i=1980;i<=2021;i++){
            year.push(i)
        }
        const gen = this.state.selectedYear
        const link = "byYear"
        const result = "Movies "+this.state.selectedYear
        if(this.state.selectedGenre.length > 0 && this.state.selectedYear !==0){
            gen = "byGen/"+this.state.selectedGenre
            link = "byYear/"+this.state.selectedYear
            result = "Movies "+ this.state.selectedYear+"--"+this.state.selectedGenre
        }
        else if(this.state.selectedGenre.length>0 && this.state.selectedYear === 0){
            link = "byGen"
            gen = this.state.selectedGenre
            result = "Movies "+this.state.selectedGenre
        }
        else if(this.state.selectedGenre.length === 0 && this.state.selectedYear !==0){
            link = "byYear"
            gen = this.state.selectedYear
            result = "Movies "+this.state.selectedYear
        }
        else if(this.state.rating.length > 0){
            gen = "byRating"
            link = "order"
            result = "Movie Order By Rating"
        }
        else if(this.state.popularity.lenght > 0){
            gen = "byPopularity"
            link = "order"
            result = "Movie Order By Popularity"
        }
        return(
            <div>
            <select className="dropdown1" onChange={this.handleChange}>
                <option value=" ">Choose a Genre</option>
                {this.state.Genre.map((gen, index) => (
                <option value={gen} key={index}>{gen}</option>
            ))}
            </select>
            <select className="dropdown2" onChange={this.handleChangeYear}>
                <option value='0'>Choose a Year</option>
                {year.map((year) => (
                <option value={year} key={year}>{year}</option>
            ))}
          </select>
          <Button variant="contained" color={this.state.rating.length >0 ? "secondary": "primary"} style={{ margin : "30px" }} onClick={this.handleRatingClick}>Order by rating</Button>
          <Button variant="contained" color={this.state.popularity.length >0 ? "secondary": "primary"} onClick={this.handlePopularityClick}>Order by popularity</Button>
          
        <GenreResult gen={this.state.gen} link={this.state.link} result={this.state.result} />
          </div>
        )
    }
}
export default Genre;