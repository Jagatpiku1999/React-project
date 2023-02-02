import "./Contact.css"
function Contact(){
    return (
        
        <div>
           <h3 className='hname'>Contact</h3> 
             <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2872398593586!2d77.70224561477043!3d12.953462690867713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1359f187ff7f%3A0x24c3decd3581f625!2sAchieversIT!5e0!3m2!1sen!2sin!4v1672228206361!5m2!1sen!2sin" width="700" height="500"></iframe></center>
        
        <div>
            <h3>Get In Touch</h3>
        <form>
          <textarea className="textarea" placeholder="Enter a Message"></textarea><br></br><br></br>
          <input className="input1" type="text" name="first name" placeholder="Enter Your Name"></input>

          <input className="input1" type="text" name="first name" placeholder="Enter Your Address"></input><br></br><br></br>

          <input className="input2" type="text" name="first name" placeholder="Enter Subject"></input><br></br><br></br>

          <button className="button">Send Message</button>

          
        </form>
        </div>
        </div>

       
    )
}

export default Contact;