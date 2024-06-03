import React from 'react'
import MovieCart from './MovieCart';
import styles from "./Movielist.module.css";
function Movielist({data}) {
    const{movieapirsponse,error,isError}=data;
    if(isError){
        return <h1>{error}</h1>
    }
    if(movieapirsponse&&movieapirsponse.Response==="False"){
        return <h1>{movieapirsponse.Error}</h1>
    }
    return(
        <div className={`container ${styles.moviesList}`}>{movieapirsponse.Search.map((movie)=>
           <MovieCart key={movie.imdbID} {...movie}/>
        )}</div>
    )
}

export default Movielist