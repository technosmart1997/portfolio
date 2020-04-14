import React, { Component } from 'react';
import { GoogleMap, Marker } from "react-google-maps"
import axios from 'axios';
import './contact.css';

import MyMapComponent from '../map/map';

class ContactPage extends Component { 
    constructor(props){
      super(props);
      this.state = {
        name: '',
        email: '',
        subject : '',
        message : ''
      };
    }

    mySubmitHandler = (event) => {
      event.preventDefault();
        alert("Message Sent Successfully");
    }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    render(){
       
       return (
            <div className="container">
                     
             <div className="section-title">
              <h2>Contact</h2>
            </div>
    
            <div className="row" data-aos="fade-in">
    
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info box">
                  <div className="address">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>47/109L/11 Prayagraj, UP</p>
                  </div>
    
                  <div className="email">
                    <i class="fas fa-envelope"></i>
                    <p>ayush21.juit@gmail.com</p>
                  </div>
    
                  <div className="phone">
                    <i class="fas fa-phone-alt"></i>
                    <p>+91 9805112238</p>
                  </div>
                    
                  <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `290px` }} />}
                    containerElement={<div style={{ height: `290px` }} />}
                    mapElement={<div style={{ height: `290px` }} />}
                    />
                </div>
    
              </div>
    
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form className="php-email-form box" onSubmit={this.mySubmitHandler}  >
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input placeholder="Name" type="text" name="name"  onChange={this.myChangeHandler} className="form-control" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                      <div className="validate"></div>
                    </div>
                    <div  className="form-group col-md-6">
                      <input placeholder="Email" type="email" className="form-control" onChange={this.myChangeHandler} name="email"  data-rule="email" data-msg="Please enter a valid email"  required/>
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input placeholder="Subject" type="text" className="form-control" onChange={this.myChangeHandler} name="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    
                    <textarea placeholder="Message" className="form-control"  onChange={this.myChangeHandler} name="message" rows="10" data-rule="required" data-msg="Please write something for us" required></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button style={{backgroundColor : "#c06fda"}} type="submit">Send Message</button></div>
                </form>
              </div>
    
            </div> 
    
          </div>
        )
    }
}


export default ContactPage;