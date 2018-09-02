//import React, { Component } from 'react';
import React from 'react';
import propTypes from 'prop-types'
import './Movie.css';

/*class Movie extends Component {

    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1> {this.props.title}</h1>
            </div>
        )
    }
}*/

function Movie({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1> {title}</h1>
        </div>
    )
}
Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}
/*class MoviePoster extends Component {
    static propTypes = {
        poster: propTypes.string.isRequired
    }

    render(){
        return(
            <img src={this.props.poster} alt=""/>
        )
    }
}*/

function MoviePoster({poster}){
    return(
        <img src={poster} alt=""/>
    )
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired
}

export default Movie;