import "./Contact.css"
import slogo from '../Asserts/JS TASK/elements/f1.jpg'
import project1 from '../Asserts/JS TASK/project_1.png'
import project2 from '../Asserts/JS TASK/project_2.png'
import project3 from '../Asserts/JS TASK/project_3.png'
function Services(){
    
    return (
        <div>
            <h3 className='hname'>Services</h3>
            
          <h2>Our Services</h2>
          <div className="sparent">
               <div className="schild" >
                  <center><img src={slogo}/></center> 
                  <h6>Better Future</h6>
                   <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               </div>

               <div className="schild">
               <center><img src={slogo}/></center>
                  <h6>Qualified Trainers</h6>
                   <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               </div>

               <div className="schild">
               <center><img src={slogo}/></center>
                  <h6>Job Oppurtunity</h6>
                   <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               </div>

               <div className="schild">
               <center><img src={slogo}/></center>
                  <h6>Better Future</h6>
                   <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               </div>

               <div className="schild">
               <center><img src={slogo}/></center>
                  <h6>Qualified Trainers</h6>
                   <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               </div>

               <div className="schild">
               <center><img src={slogo}/></center>
                  <h6>Job Oppurtunity</h6>
                   <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               </div>
          </div>
             <h2>Our Projects</h2>
             <div >
                <span >
                   <img className="project" src={project1} height={650} width={450} />
                   <img className="project" src={project2} height={650} width={450}/>
                   <img className="project" src={project3} height={650} width={450}/>
                </span>
             </div>
        </div>
    
    )
}


export default Services;