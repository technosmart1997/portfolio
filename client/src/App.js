import React , {Component } from 'react';
import './App.css';

import Content from './components/Content';
import Sidebar from './components/Sidebar';


import { Helmet } from 'react-helmet';
import icon from './assets/icon.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        name : "Ayush Agrawal",
        isActive : true
    }
    this.sidebarToggleHandler = this.sidebarToggleHandler.bind(this);
}

sidebarToggleHandler(){
    let state = this.state.isActive;
    this.setState({ isActive : !state });
}
   
render(){
    return (
      <div id="wrapper">
                   
                   <Helmet>
                          <title>Ayush Agrawal</title>
                          <meta name="ABC" content="ABC" />
                          <link rel="icon" type="image/png" href={icon} sizes="16x16" /> 
                  </Helmet>



                  <section id="sidebar" className={this.state.isActive ? 'non-active': 'active'}>  
                    <div className="d-flex flex-column">
                             <Sidebar toggleSidebar={this.sidebarToggleHandler} />
                     </div>
                  </section>

                    <section className="hero d-flex flex-column justify-content-center align-items-center">
                            <div className="hero-container" data-aos="fade-in">
                                <h2 className="hi">Hi I'm </h2>   
                                <br />
                                <h1>{this.state.name} </h1>                             </div>
                    </section>    
                
                     <main className="main">
                        <Content />
                    </main> 


      
    </div>
    )
}
}

export default App;
