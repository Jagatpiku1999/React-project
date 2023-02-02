import React from 'react';
import "./Footer.css"

import logo from '../Asserts/JS TASK/logo.png'
import Uheading from '../Asserts/JS TASK/Uheading.jpg'
import {Link} from 'react-router-dom';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            navLinks:{
                Home:'Home',
                About:'About',
                TableData:'TableData',
                Services:'Services',
                Blog:'Blog',
                Contact:'Contact'
            }
        }

    }
    render(){
        return(
           <div>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="no-image" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link to='/' ><li className="nav-item nav-link">{this.state.navLinks.Home}</li></Link>
        <Link to='/About' ><li className="nav-item nav-link">
        {this.state.navLinks.About}
        </li></Link>
        <Link to='/TableData' ><li className="nav-item nav-link">
        {this.state.navLinks.TableData}
        </li></Link>
        <Link to='/Blog' ><li className="nav-item nav-link">
        {this.state.navLinks.Blog}
        </li></Link>
        <Link to='/Contact' ><li className="nav-item nav-link">
        {this.state.navLinks.Contact}
        </li></Link>
        <Link to='/Services' ><li className="nav-item nav-link">
        {this.state.navLinks.Services}
        </li></Link>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-danger" type="submit">Get A Quote</button>
      </form>
    </div>
  </div>
</nav>
                  <img src={Uheading} alt="no-image" width={1536} height={150} />
                  
                  
           </div>
        )
    }


}


export default Header;