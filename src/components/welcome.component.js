/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import "./sass/welcome.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default class Welcome extends Component {
    
    render() {
        return (
            
            <div className="container-fluid bg-gradient-bg">
                
                <nav className="navbar navbar-expand-lg fixed-top py-3">
                    <div className="container"><a href="#" className="navbar-brand text-uppercase ">alisson f<span className="flip_H">r</span>anco</a>
                        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><FontAwesomeIcon icon={faBars}/></button>
                        <div id="navbarSupportedContent" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">About</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Gallery</a></li>
                                <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <script src="./js/welcome.js"></script>
            </div>
                   
        );
    }
}