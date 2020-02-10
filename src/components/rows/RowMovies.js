import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './row.css'


export default class RowMovies extends React.Component {

    constructor(){
        super()
        this.state = {
            keyword: '',
            img: []
        }
    }
    componentDidMount = () =>
        fetch(`http://www.omdbapi.com/?apikey=695d51e7&s=harry&type=movie`)
        .then(results => results.json())
        .then(this.renderResult)

    renderResult = (results) =>
        this.setState({
            img: results.Search
        })
        // console.log(results)
    render(){
        return(
            <div className="container-fluid">
                <div className="container-fluid search-result">
                <h3>Movies</h3>
                    <div className="row align-center">
                    {
                        this.state.img.slice(0, 5).map(
                            (img, index) =>
                                <div key={index} className="movie" >
                                    <img className="img-fluid size-movie" src={img.Poster} alt="poster"></img>
                                </div>
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}
