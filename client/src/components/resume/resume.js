import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './resume.css';


const ResumePage = (props) => {
    const education = props.education;
    const internships = props.internships;
    return (
        <div className="container">

        <div className="section-title">
            <h2>Resume</h2>
        </div>

        <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                   

                    <h3 className="resume-title">Education</h3>
                    {
                        education.map(item => (
                            <div className="resume-item" key={item.id}>
                                <h4>{item.title}</h4>
                                <h5>{item.date}</h5>
                                <p style={{marginTop : 10, marginBottom: 5}}>{item.college}</p>
                                <p>{item.marks}</p>
                            </div>
                        ))
                    }
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="resume-title">Experience</h3>

                    {
                        internships.map(item => (
                            <div className="resume-item" key={item.id}>
                                <h4>{item.title}</h4>
                                <h5>{item.date}</h5>
                                <p className="para">{item.company}</p>
                                <ul>
                                    <li>{item.desc}</li>
                                    {item.link && <li>
                                        <a target="_blank" href={item.link} >Go To Project</a>
                                    </li>}
                                </ul>
                            </div>
                        ))
                    }
                
    </div>

</div>

<br />

            <div className="row">
                <div className="col-md-6">
                    <a target="_blank" href="https://drive.google.com/open?id=1MtQGF_G_1H7UO3CCU0WbLqUvU-la1JX_" download>
                        <button className="btn form-control"><i class="fa fa-download"></i> &nbsp;DOWNLOAD RESUME</button>
                    </a>
                </div>
                <div className="col-md-6">
                    <Link to="contact" smooth={true} duration={600}>
                        <button className="btn form-control"><i class="fas fa-phone"></i> &nbsp;CONTACT ME</button>
                    </Link>
                </div>
                </div>
            </div>
    )
}


export default ResumePage;