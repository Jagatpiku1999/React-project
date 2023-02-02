import Bloglogo1 from "../Asserts/JS TASK/blog/single_blog_1.png"
import Bloglogo2 from "../Asserts/JS TASK/blog/single_blog_2.png"
import Bloglogo3 from "../Asserts/JS TASK/blog/single_blog_3.png"
import Bloglogo4 from "../Asserts/JS TASK/blog/single_blog_4.png"
import Bloglogo5 from "../Asserts/JS TASK/blog/single_blog_5.png"

import Post1 from "../Asserts/JS TASK/post/post_1.png"
import Post2 from "../Asserts/JS TASK/post/post_2.png"
import Post3 from "../Asserts/JS TASK/post/post_3.png"
import Post4 from "../Asserts/JS TASK/post/post_4.png"
import Post5 from "../Asserts/JS TASK/post/post_5.png"
import Post6 from "../Asserts/JS TASK/post/post_6.png"
import Post7 from "../Asserts/JS TASK/post/post_7.png"
import Post8 from "../Asserts/JS TASK/post/post_8.png"
import Post9 from "../Asserts/JS TASK/post/post_9.png"
import Post10 from "../Asserts/JS TASK/post/post_10.png"


import "./Blog.css"
function Blog(){
    return( 
    <div>
        <h3 className='hname'>Blog</h3>
        

        <div className="Bparent">
            <img className="Bimage" src={Bloglogo1} ></img>
            <div className="Bchild">
                <h4>Google inks poet for new 35-story office</h4>
                <p>Ghost is designed to be a powerful, hassle-free blogging and audience <br></br>management platform, especially for paid publications. It's a bit more <br></br> focused on blogging than WordPress, which, after years of development, <br></br> has a lot of CMS DNA.</p>
            </div>
            <div className="Bbox">
                <h4>Explore</h4>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
            </div>
        </div>


        <div className="Bparent">
            <img className="Bimage" src={Bloglogo2} ></img>
            <div className="Bchild">
                <h4>Google inks poet for new 35-story office</h4>
                <p>Ghost is designed to be a powerful, hassle-free blogging and audience <br></br>management platform, especially for paid publications. It's a bit more <br></br> focused on blogging than WordPress, which, after years of development, <br></br> has a lot of CMS DNA.</p>
            </div>
            <div className="Bbox">
                <h4>Recent Post</h4>
                <img src={Post1}></img><br></br>
                <img src={Post2}></img><br></br>
                <img src={Post3}></img><br></br>
                <img src={Post4}></img>
                
            </div>
        </div>


        <div className="Bparent">
            <img className="Bimage" src={Bloglogo3} ></img>
            <div className="Bchild">
                <h4>Google inks poet for new 35-story office</h4>
                <p>Ghost is designed to be a powerful, hassle-free blogging and audience <br></br>management platform, especially for paid publications. It's a bit more <br></br> focused on blogging than WordPress, which, after years of development, <br></br> has a lot of CMS DNA.</p>
            </div>
            <div className="Bbox">
                <h4>Instagram Feeds</h4>
                <img src={Post5}></img>
                <img src={Post6}></img>
                <img src={Post7}></img>
                <img src={Post8}></img>
                <img src={Post9}></img>
                <img src={Post10}></img>
            </div>
        </div>


        <div className="Bparent">
            <img className="Bimage" src={Bloglogo4} ></img>
            <div className="Bchild">
                <h4>Google inks poet for new 35-story office</h4>
                <p>Ghost is designed to be a powerful, hassle-free blogging and audience <br></br>management platform, especially for paid publications. It's a bit more <br></br> focused on blogging than WordPress, which, after years of development, <br></br> has a lot of CMS DNA.</p>
            </div>
            {/* <div className="Bbox">
                <h4>Explore</h4>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
            </div> */}
        </div>


        <div className="Bparent">
            <img className="Bimage" src={Bloglogo5} ></img>
            <div className="Bchild">
                <h4>Google inks poet for new 35-story office</h4>
                <p>Ghost is designed to be a powerful, hassle-free blogging and audience <br></br>management platform, especially for paid publications. It's a bit more <br></br> focused on blogging than WordPress, which, after years of development, <br></br> has a lot of CMS DNA.</p>
            </div>
            {/* <div className="Bbox">
                <h4>Explore</h4>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
                <p>paragraph</p>
            </div> */}
        </div>

       
    </div>


    
    )
}

export default Blog;