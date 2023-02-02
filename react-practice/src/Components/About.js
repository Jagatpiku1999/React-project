// // import axios from 'axios';
// import React from 'react'
// class About extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             firstName:'',
//             lastname:'',
//             errMsg:'',
//             user:[]
//         }
//         this.changeHandler = this.changeHandler.bind(this);
//         // this.lastNameHandle =  this.lastNameHandle.bind(this);
//         this.submitHandler= this.submitHandler.bind(this);

//     }

//     firstNameHandle(event){
//         this.setState({
//        firstName:event.target.value
       
//         })
//     }

//     lastNameHandle(event){
//         this.setState({
//             lastname:event.target.value 
//         })
//     }
//     changeHandler(event){
        
//         this.setState({
//             [event.target.name] : [event.target.value]
//         })
//         this.state.errMsg=''

//     }

//     submitHandler(event){
//         event.preventDefault();

//         if(this.state.firstName == ''){
//            this.setState({
//             errMsg:'Please enter the FirstName'
//            })
//         }

//     }

//     user={
//         firstName:this.state.firstName,
//         lastName:this.state.lastName
//     }

//     // axios.post(url,{user}).then((res)=>{
//     //     console.log(res);
//     //     .catch((error) => {
//     //         console.log(error);
//     //     })
//     //     })
//     // })

// render(){
//     const { firstName,lastname} = this.state // state destructering
//     return ( 
//         <div>
//           <h3 className='hname'>About</h3>

//         <React.Fragment> 
//             <center>
//             <form onSubmit={this.submitHandler}>
//                 <label>FirstName</label>
//                 <input type="text"  name='firstName' value={firstName} onChange={this.changeHandler } /><br/>
//                 <span style={{color:'red'}}>{this.state.errMsg}</span><br/>
//                 <label>LastName</label>
//                 <input type="text" name='lastname' value={lastname}  onChange ={this.changeHandler}/><br/><br/>
//                 <button>Submit</button>
//             </form>
//             </center>
//         </React.Fragment>
//         </div>
//     )
// }
// }


// export default About;




import Aphoto from "../Asserts/JS TASK/about_overlay.png"
import Aphoto1 from "../Asserts/JS TASK/about_part_img.png"
import Aphoto2 from "../Asserts/JS TASK/experiance_overlay.png"
import Aphoto3 from "../Asserts/JS TASK/experiance_img.png"

import "./About.css"
function About(){
    return(
        <div>
            <h3 className='hname'>About</h3>


            <div className="Aphoto">
            <img  src={Aphoto} height="600px" width="600px"></img>
            <div>
                <img className="Aphoto1" src={Aphoto1} height="400px" width="500px" ></img>
            </div>
            <div className="Aphoto2">
                <h4>Engineering Yours Dreams With Us</h4>
                <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative image</p>
            </div>
            </div>


            <div className="Aphoto3">
            <img  src={Aphoto2} height="600px" width="600px"></img>
            <div>
                <img className="Aphoto4" src={Aphoto3} height="400px" width="500px" ></img>
            </div>
            <div className="Aphoto5">
                <h4>WE are Experience in Consrtuction</h4>
                <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative image</p>
            </div>
            </div>
           
        </div>
    )
}
export default About