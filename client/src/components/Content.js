import React , { Component } from 'react';
import './Content.css';

import axios from 'axios';


import AboutPage from './about/about';
import SkillPage from './skills/skill';
import ResumePage from './resume/resume';
import ContactPage from './contact/contact';
import Portfolio from './portfolio/Portfolio';
import InterestPage from './interest/interest';
import WorkPage from './work/work';
import Footer from './footer/footer';
 
class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            projects : [],
            skills : [],
            interests : [],
            education : [],
            internships : [],
            loaded : false
        }
    }

    componentDidMount() {
        axios.get('/about/getMyData').then(res => {
            const results = res.data.data;
            this.setState({ projects: results.projects });
            this.setState({ skills : results.skills}); 
            this.setState({ interests : results.interests}); 
            this.setState({ education : results.education}); 
            this.setState({ internships : results.internships}); 
            this.setState({ loaded : true }); 
        })
    }


    render(){ 
       return (
           <div className="main_div">
               <section id="about" className="about">
                    <AboutPage/>
                </section>

                <section id="work" className="workBox" style={{backgroundColor : "#f0f0f0"}}>
                    <WorkPage/>
                </section>

                <section id="portfolio" class="portfolio section-bg">
                       {
                        this.state.loaded && <Portfolio projects={this.state.projects}/>
                       } 
                </section>  
            
               <section id="skills" class="skills section-bg"  style={{backgroundColor: "#D1C4E9"}} >
                        {this.state.loaded && <SkillPage skills={this.state.skills} />}
                </section>
             
               

                <section id="resume" className="resume" >
                    {this.state.loaded && <ResumePage education={this.state.education} internships={this.state.internships} />}
                </section>

                    <section id="ineterst">
                    {
                        this.state.loaded && <InterestPage interests={this.state.interests}/>
                    } 
                    </section >

                     <section id="contact" className="contact" style={{backgroundColor : "#f0f0f0"}}>
                       <ContactPage  />
                    </section>

                    <section className="footer" style={{backgroundColor : "#f0f0f0"}}>
                        <Footer />
                    </section>
                                
           </div>
        )
    }
}

export default Content;


                      

    
