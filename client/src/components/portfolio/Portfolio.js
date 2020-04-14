import React , { useState , useEffect } from 'react';
import './Portfolio.css';


const Portfolio = (props) =>{

    const portfolio = props.projects;
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
  
    useEffect(()=> {
           setProjects(portfolio);
    }, []);
    
    useEffect(() => {
    setProjects([]);
         const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }));
         setProjects(filtered);
    }, [filter]);

 
    return (
        <div className="portfolio section-bg">
        <div className="container">

            <div className="section-title">
                <h2>Portfolio</h2>
            </div>

            <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul className="portfolio-flters">
                    <li active={filter === 'all'} onClick={() => setFilter('all')} className="filter-active">ALL</li>
                    <li active={filter === 'web'} onClick={() => setFilter('web')}>WEB</li>
                    <li active={filter === 'app'} onClick={() => setFilter('app')}>APP</li>
                    </ul>
                </div>
            </div>

            
            <div className="row portfolio-container" style={{marginTop : '30px'}} data-aos="fade-up" data-aos-delay="100">
            
            {projects.map(item => item.filtered === true ? ( 
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 portfolio-item filter-app" key={item.title}> 
                       <div className="portfolio-wrap">
                            <img
                                className="img-thumbnail img-fluid" 
                                style={{maxWidth:"100%"}}
                                src={require(`../../assets/projects/${item.imageUrl}.webp`)}
                                alt="item"
                            /> 
                           
                            <div className="project_desc">
                                <div className="project_title">{item.title}</div>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                        
                    </div>
                ) : '')}
            </div>
        </div>
        </div>
    )
  
}

export default Portfolio;





             
