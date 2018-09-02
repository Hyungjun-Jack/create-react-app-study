import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  // render: componentWillMound() -> render() -> componentDidMount()
  // Update: componetWillReceiveProps() -> shouldComponentUpdate() -> componetWillUpdate() -> render() -> componentDidUpdate()

  state = {
    
  }

  componentDidMount(){

    /*setTimeout(() => {
      this.setState({
        movies:[
          {
            title: "신과함께",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItyF4_9vAHetUy_bYvFN7S7ZRlahHdBX8tCkF1jpKavRrFJogYw"
          },
          {
            title: "마녀",
            poster: "data:image/jpeg;base64,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"
          },
          {
            title: "안시성",
            poster: "https://t1.daumcdn.net/movie/20245cd77c2b5b540d7e09cb5b133f12e998a3b5"
          }
        ]
      })
    }, 2000)*/
    console.log(fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count"))
    
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })

    return movies
  }

  _loading = () => {
    return "Loading"
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : this._loading() }
      </div>
    )
  }
}

export default App;
