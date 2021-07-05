import React, { useEffect} from 'react'
import { connect, useDispatch , useSelector } from 'react-redux'
import { fetchMoviesRequest } from './redux/index'

function Movies(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMoviesRequest())
    }, [dispatch])
    const movies = useSelector((state) => state.movies)
    //console.log("Container Response:",movies.movies);
    
    return(
        movies.loading ? (
            <h2>Loading...</h2>
        ) :  movies.movies ?
            (
            <div>
                <h2>Upcoming Movies</h2>
                <div>
                    {movies && movies.movies && movies.movies.map(movie => <button>{movie.title}</button>)}
                    
                </div>
            </div>
        ) :(
            <h1>{movies.error}</h1>
            )
    )
}
/*const mapStateToProps = state => {
    return {
        movies : state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //fetchMovies : () => dispatch(fetchMovies())
        fetchMovies : () => dispatch(fetchMoviesRequest())
    }
}
*/
//export default connect(mapStateToProps,mapDispatchToProps)(Movies)
export default Movies