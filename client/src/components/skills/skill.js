import React, { Component } from 'react';
import './skill.css';

const SkillPage = (props) => {
    return (
        <div class="container">
            <div class="section-title">
                <h2>Techs</h2>
            </div>
                    <div class="row skills-content">
                        {props.skills.map((item) => (
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6 main_div" data-aos="fade-up" key={item.id}>
                                <div className="skill">
                                     <i class="fas fa-code fa-fw"></i>&nbsp; <span className="skillTitle">{item.name}</span>
                                </div>                               
                            </div>
                        )) 
                        }
                    </div>
        </div>
    )
}

export default SkillPage;