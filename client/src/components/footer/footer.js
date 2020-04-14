import React from 'react';
import './footer.css';

const Footer = props => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-2 col-md-0 col-sm-0"></div>
                <div className="col-lg-5 col-md-6 col-sm-6 left_box">
                    <h2>Ayush Agrawal</h2>
                    <p>&copy;&nbsp; Copyright 2020 | Made with <i class="fas fa-heart heart"> </i> and <i class="fas fa-coffee coffee"></i> by me.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 right_box">
                    <div className="social-links mt-3 text-center">   
                    <a href="https://github.com/technosmart1997"  target="_blank" className="twitter"><i className="fab fa-github"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=100012856871122"  target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                            <a href="http://mailto:ayush21.juit@gmail.com"  target="_blank" className="google"><i className="fab fa-google-plus-g"></i></a>
                            <a href="https://www.linkedin.com/in/ayush-agrawal-5ab9b8139/" target="_blank" className="facebook"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                </div>
                <div className="col-lg-2 col-md-0 col-sm-0"></div>
            </div>
        </div>
    )
}


export default Footer;