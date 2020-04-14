import React from 'react';
import './interest.css';

const interestPage = props => {
    return (
        <div className="container">             
             <div className="section-title">
              <h2>Interests</h2>
            </div>

            <div className="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <div className="row main_div">
                        {props.interests.map(item => (
                            <div key={item.id} className="col-lg-3 col-md-4 col-sm-4 col-6 interest">
                                <div className="interest-icon">
                                    <i class={item.icon}></i>
                                </div>
                                <h4>{item.title}</h4>
                            </div>
                        )
                        )}
                    </div>

                </div>
                <div class="col-lg-2"></div>
            </div>
        </div>
    )
} 

export default interestPage;