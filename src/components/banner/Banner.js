import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default class Banner extends React.Component {

    constructor(){
        super()
    }
    render(){
        return(
            <div className="container-fluid banner">
                <div className="disc">
                    <h3 className="banner-title">Movie title</h3>
                    <h6>
                    lorem imsum bhfbrekhjfhvlfhdvhefl efvhbehfjlv h<br></br>
                     nvf vljvfvlkjv gjgk; j gjb jvfvouvbrivbi
                    </h6>
                </div>
                <div className="row">
                    <div className="col-2">
                        <a className="play-but" href="">
                        <FontAwesomeIcon icon={faPlay} /> Play
                        </a>
                    </div>
                    <div className="col-2">
                        <a className="inf-but" href="">
                            <FontAwesomeIcon icon={faInfoCircle} /> More Info
                        </a>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        )
    }
}
