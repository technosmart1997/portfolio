import React, { Component } from 'react';
import image from '../../assets/about.png';
import './about.css';

const AboutPage = (props) => {
    return (
        <div className="container">

        <div className="row">
        <div className="col-lg-5 col-md-6" data-aos="fade-right">
            <img src={image} className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-6 col-md-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            
            
            <h1 className="about-title">Who I am</h1>
            <p className="about_desc">
            Hi! my name is Ayush Agrawal, <br/>

                I’m 22 years old and I’m a tech enthusiast with a major focus on Full Stack Development. I also have experience in Programming and Designing.A determined person with a clear, logical mind with a practical approach to problem solving.
                <br/>
                I started studying basic HTML when I was in first year of college. Since then my crave for learning only got bigger. 
        
                
                I have an industrial experience of working in some reputed companies as an Intern and worked with the best developers to 
                enhance my technical skills.
                <br/>
            </p>
            <p className="about_desc"  style={{marginBottom : "2rem"}}>

                My projects are focused on the user experience with unique Ideas and it’s usability as a whole, aiming for a good relationship between user and platform - whether it’s a system or a full website.
            </p>
            <p className="about_desc" style={{marginBottom : "2rem"}}>
                From my perspective, proactivity and optimism should walk side by side in a way that great results are achieved on a relaxed workspace.
            </p>
            <h5 className="funnyQuote"><i class="fas fa-cheese"></i> EAT &nbsp; <i class="fas fa-bed"></i> SLEEP  &nbsp;  &lt; CODE &gt; &nbsp;  <i class="fas fa-coffee"></i> COFFEE!</h5>
        </div>
        <div className="col-lg-1"></div>

        </div>

    </div>
    )

  
} 

export default AboutPage;