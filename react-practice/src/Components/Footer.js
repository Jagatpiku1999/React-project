import React from 'react';
import footerlogo from '../Asserts/JS TASK/footer_logo.png';

import footerlogo1 from '../Asserts/JS TASK/footer_img/footer_1.png';
import footerlogo2 from '../Asserts/JS TASK/footer_img/footer_2.png';
import footerlogo3 from '../Asserts/JS TASK/footer_img/footer_3.png';
import footerlogo4 from '../Asserts/JS TASK/footer_img/footer_4.png';
import footerlogo5 from '../Asserts/JS TASK/footer_img/footer_5.png';
import footerlogo6 from '../Asserts/JS TASK/footer_img/footer_6.png';
import footerlogo7 from '../Asserts/JS TASK/footer_img/footer_7.png';
import footerlogo8 from '../Asserts/JS TASK/footer_img/footer_8.png';
import "./Footer.css"

function Home(props){
    console.log(props);
    
    return(
        <div className="main-footer">
            <div className="container">
              <div className="row">
                {/* column 1 */}
                <div className="col">
                  <img src={footerlogo}/>
                 <ul>
                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </ul>
                </div>
                {/* column 2 */}
                <div className="col">
                <ul className="list-unstyled">
                    <h5>BEST SERVICES</h5>
                    <p>General Contracting Mechanical</p>
                    <p>Engineering Civil</p>
                    <p>Engineering Bridge Consrtuction</p>
                    <p>Electrical Engineering</p>
                </ul>
                </div>
                {/* column 3 */}
                <div className="col">
                <ul className="list-unstyled">
                    <h5>OUR GALLERY</h5>
                    <img src={footerlogo1}/>
                    <img src={footerlogo2}/>
                    <img src={footerlogo3}/>
                    <img src={footerlogo4}/>
                    <img src={footerlogo5}/>
                    <img src={footerlogo6}/>
                    <img src={footerlogo7}/>
                    <img src={footerlogo8}/>
                    
                </ul>
                </div>
                {/* column 4 */}
                <div className="col">
                <ul className="list-unstyled">
                    <h5>CONTACT INFO</h5>
                    <li>4361 Pexcon creative idea</li>
                    <li>Address: Marathalli</li>
                    <li>Phone: +2 36 265(0060)</li>
                    <li>Email:info@gmail.com</li>
                </ul>
                </div>
              </div>
              <div className="row">
                <p className="col-sm">
                © 2021 Copyright All rights reserved: This template is made with JAGAT.
                </p>
              </div>
            </div>
        </div>
    )
}

export default Home;









    