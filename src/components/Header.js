import React from 'react'
import SearchMovie from './SearchMovie'
import logo from '../img/logo.png'
import './header.css'

export default class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-2">
                        <img className="logo" src={logo} alt="logo"></img>
                    </div>
                    <div className="col-1">
                        <h2>series</h2>
                    </div>
                    <div className="col-1">
                        <h2>movies</h2>
                    </div>
                    <div className="col-8">
                        
                    </div>                       
                </div>
            </div>
        )
    }
}