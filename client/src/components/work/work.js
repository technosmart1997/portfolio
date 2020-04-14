import React from 'react';
import './work.css';

const WorkPage = (props) => {
    return(
        <div className="container">             
            <div className="section-title">
                <h2 style={{textAlign : 'left'}}>What I do</h2>
             </div>

            <div className="row" >
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 work">
                        <div className="main_box">
                            <div className="interest-icon">
                                <i class="fas fa-laptop-code fa-4x fa-fw"></i>
                            </div>
                            <h4>PROGRAMMING</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  col-sm-6 col-12 work">
                    <div className="main_box">
                        <div className="interest-icon">
                            <i class="fas fa-briefcase fa-4x fa-fw"></i>
                        </div>
                        <h4>FULL STACK DEVELOPMENT</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 work">
                    <div className="main_box">
                        <div className="interest-icon">
                            <i class="fas fa-database fa-4x fa-fw"></i>
                        </div>
                        <h4>UI/UX DEVELOPMENT</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 work">
                    <div className="main_box">
                        <div className="interest-icon">
                            <i class="fas fa-qrcode fa-4x fa-fw"></i>
                        </div>
                        <h4>DESIGNING</h4>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default WorkPage; 