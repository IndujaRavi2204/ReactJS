import React , {useState,useEffect} from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Rating from '@material-ui/lab/Rating';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      margin : "auto",
    },
  });
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
function SearchApi (props){
    const [movieDetails, setMovieDetails ] = useState({});
    const classes = useStyles();
    const [message,setMessage] = useState("")
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false)
    }
    useEffect(() => {
        const options1 = {
            method: 'GET',
            url: 'https://data-imdb1.p.rapidapi.com/movie/id/'+props.id+'/',
            headers: {
              'x-rapidapi-key': '0287cf982fmsh8bf5f855596fa21p172535jsn3f7bb1ded664',
              'x-rapidapi-host': 'data-imdb1.p.rapidapi.com'
            }
        };
        axios.request(options1).then((response) => {
            setMovieDetails(response.data[props.movie]);
            //console.log(response.status);
            
            if(response.status === 200){
                setMessage("Request succeeded.")
                setOpen(true)
            }
        }).catch((error) =>{
	        console.error(error);
            setOpen(true)
            if(error.response.status === 400){
                setMessage("The server could not understand the request.")
                
            }
            else if(error.response.status === 401){
                setMessage("Unauthenticated user, Please log in to access the protected resource.")
               
            }
            else if(error.response.status === 403){
                setMessage("An authenticated client does not have the required privileges.")
               
            }
            else if(error.response.status=== 404){
                setMessage("A resource or URL is not found.")
            }
            else if(error.response.status === 405){
                setMessage("An HTTP method is not allowed.")
            }
            else if(error.response.status === 500){
                setMessage("Internal Server Error")
            }
        });
    }, [props.id,props.movie])
    console.log("Message:",message)
        //console.log(this.state.movieDetails.title);
        //const details = this.state.movieDetails;
            return(
                
                <div>
                <Box mx="auto" p={1}>
                <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Loading..."
                    height="340"
                    image={movieDetails.image_url}
                    title="Movie image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {movieDetails.title}
                        </Typography>
                        <Typography variant="body2" color='initial' component="p">
                        {movieDetails.description}
                        </Typography>
                        
                        <Typography variant="h5" component="h4">Rating: {movieDetails.rating} </Typography>
                        <Rating name="read-only" value={movieDetails.rating ? movieDetails.rating : 0} precision={0.5} max={10} readOnly />
     
                        <Typography>
                        <Link href={movieDetails.trailer} target="_blank" rel="noopener">
                        Watch trailer here
                        </Link>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Box>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message.includes("succeeded") ? "success": "error"}>
                {message}
                </Alert>
                </Snackbar>
                </div>
            )
        
}
export default SearchApi