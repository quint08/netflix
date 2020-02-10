import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './movieSize.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchMovie extends React.Component {
    constructor() {
        super()
        this.state = {
            keyword: '',
            movies: []
        }
    }

    keywordChanged = event =>
        this.setState({keyword: event.target.value})

    SearchMovie= () =>
        fetch(`http://www.omdbapi.com/?s=${this.state.keyword}&apikey=695d51e7`)
        .then(response => response.json())
        .then(this.renderMovies)
        // console.log(this.state.keyword)
    renderMovies = (response) =>
        this.setState({
            movies: response.Search
        })

    render(){
        return(
            <div>
            <div className="search-input">
                <div className="input-group">
                    <input  value={this.state.keyword}
                            type="search"
                            required=""
                            onChange={this.keywordChanged}
                            className="form-control border-search" 
                            placeholder="keyword"
                            />
                    <div className="input-group-append">
                        <button type="submit"
                                onClick={this.SearchMovie}
                                className="btn button-search">
                            search
                        </button>
                    </div>
                </div>
            </div>
                {/* <ul className="list-group">
                {
                    this.state.movies.map(
                        (movie, index) =>
                            <li key={index} className="list-group-item" >
                                <img className="img-fluid rounded float-left size-movie" src={movie.Poster} alt="poster"></img>
                            </li>
                    )
                }
                </ul> */}
                <div className="container-fluid search-result">
                    <div className="row align-center">
                    {
                        this.state.movies.map(
                            (movie, index) =>
                                <div key={index} className="movie" >
                                    <img className="img-fluid size-movie" src={movie.Poster} alt="poster"></img>
                                </div>
                        )
                    }
                    </div>
                </div>
            </div>
            
        )
    }
}
export default SearchMovie