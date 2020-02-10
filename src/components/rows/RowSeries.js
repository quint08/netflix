import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './row.css'


export default class RowSeries extends React.Component {

    constructor(){
        super()
        this.state = {
            keyword: '',
            posters: []
        }
    }
    componentDidMount = () =>
        fetch(`http://www.omdbapi.com/?apikey=695d51e7&s=harry&type=series`)
        .then(results => results.json())
        .then(this.renderResult)

    renderResult = (results) =>
        this.setState({
            posters: results.Search
        })
        // console.log(results)
    render(){
        return(
            <div className="container-fluid">
                <div className="container-fluid search-result">
                <h3>Series</h3>
                    <div className="row align-center">
                    {
                        this.state.posters.slice(0, 5).map(
                            (poster, index) =>
                                <div key={index} className="movie" >
                                    <img className="img-fluid size-movie" src={poster.Poster} alt="poster"></img>
                                </div>
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}
