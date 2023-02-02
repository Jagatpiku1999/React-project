import "./Home.css"
import loginp from '../Asserts/JS TASK/advance_feature_img.png';
import React from 'react';


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Username:'',
            Password:'',
            Mobile:'',
            Email:'',
            errMsg:'',
            errMsg1:'',
            errMsg2:'',
            errMsg3:'',
            
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler= this.submitHandler.bind(this);

    }

   
    changeHandler(event){
        
        this.setState({
            [event.target.name] : [event.target.value]
        })
        this.state.errMsg=''

    }

    changeHandler(event){
        
        this.setState({
            [event.target.name] : [event.target.value]
        })
        this.state.errMsg1=''

    }

    changeHandler(event){
        
        this.setState({
            [event.target.name] : [event.target.value]
        })
        this.state.errMsg4=''

    }

    changeHandler(event){
        
        this.setState({
            [event.target.name] : [event.target.value]
        })
        this.state.errMsg3=''

    }


   

    submitHandler(event){
        event.preventDefault();

        if(this.state.Username == ''){
           this.setState({
            errMsg:'Enter Username',
           })
        }

        if(this.state.Password == ''){
            this.setState({
             errMsg1:'Enter Password',
            })
         }

         if(this.state.Mobile == ''){
            this.setState({
             errMsg2:'Enter Mobile No',
            })
         }

         if(this.state.Email == ''){
            this.setState({
             errMsg3:'Enter Email Id',
            })
         }
    }


       
    

    render(){
        const { Username,Password,Mobile,Email} = this.state
        
           console.log('responcedata',this.state.userdata);

   
    return( 
    <div>
        <h3 className='hname'>Home</h3>
        
        <section>
        <div className="register">
         <div className="col-1">
           
            <h2 className="piku">Log in</h2>
            <React.Fragment>
            <form id="form" className="flex flex-col"onSubmit={this.submitHandler}>

                <input type="text" name="Username"  placeholder="Username" value={Username} onChange={this.changeHandler } pattern={`^([A-Z]+[a-z]{9})`} /><br></br>
                <span style={{color:'red'}}>{this.state.errMsg}</span>

                <input type="password" name="Password"  placeholder="Password" value={Password} onChange={this.changeHandler } pattern={`^([A-Z]+[a-z]+[!@#$%^&*][0-9]{3,5})`} /><br></br>
                <span style={{color:'red'}}>{this.state.errMsg1}</span>
                

                <input type="number" name="Mobile"  placeholder="Mobile No" value={Mobile} onChange={this.changeHandler }  pattern={`^([6-9]+[0-9]{9})`} /><br></br>
                <span style={{color:'red'}}>{this.state.errMsg2}</span>
                
                 
                <input type="text" name="Email" placeholder="Email Id"  value={Email} onChange={this.changeHandler } pattern={ `^([a-z]+[0-9]+@[a-z]+.[a-z]{2,20})$`}/><br></br>
                <span style={{color:'red'}}>{this.state.errMsg3}</span>
                

                <button className="btn">Sign in</button>
            </form>
            </React.Fragment>
            
         </div>
         <div className="col-2">
            <img src={loginp} alt="no image"/>
            </div>   
        </div>
        </section><br></br>
        


        
    </div>
    )
}
}

export default Home;
