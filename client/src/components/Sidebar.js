import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './Sidebar.css';
import image from '../assets/profile_final.png';


class Car extends Component {
    
    constructor(props){
        super(props);
        this.doParentToggleFromChild = this.doParentToggleFromChild.bind(this);
    }

    doParentToggleFromChild(){
         this.props.toggleSidebar();
    }

    render(){

        return (    
            <div className="sidebar">
                <div className="profile">
                    <img src={image} alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Ayush Agrawal</a></h1>
                    <div className="social-links mt-3 text-center">   
                        <a href="https://github.com/technosmart1997"  target="_blank" className="twitter"><i className="fab fa-github"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100012856871122"  target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="instagram"  target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="http://mailto:ayush21.juit@gmail.com"  target="_blank" className="google"><i className="fab fa-google-plus-g"></i></a>
                        <a href="https://www.linkedin.com/in/ayush-agrawal-5ab9b8139/" target="_blank" className="facebook"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <nav className="nav-menu">
                    <ul>
                        <li><Link to="/" smooth={true} duration={800}><i className="fas fa-home"></i> <span>Home</span></Link></li>
                        <li><Link to="about" smooth={true} duration={800}><i className="far fa-user fa-fw"></i> <span>About</span></Link></li>
                        <li><Link to="skills" smooth={true} duration={800}><i className="fas fa-tools fa-fw"></i> <span>Skills</span></Link></li>
                        <li><Link to="resume" smooth={true} duration={800}><i className="far fa-file-alt fa-fw"></i> <span>Experience</span></Link></li>
                        <li><Link to="portfolio" smooth={true} duration={800}><i className="fas fa-book-open fa-fw"></i> Portfolio</Link></li>
                        <li><Link to="contact" smooth={true} duration={800}><i className="far fa-envelope fa-fw"></i> Contact</Link></li>
                    </ul>
                </nav>
                <button type="button" className="mobile-nav-toggle d-xl-none" onClick={this.doParentToggleFromChild}><i class="fas fa-bars"></i></button>
                </div>            
        )
    }
}

export default Car;