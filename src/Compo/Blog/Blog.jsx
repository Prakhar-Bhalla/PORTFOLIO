import React from 'react'
import "./Blog.css"
import ssblog from "../../images/ssblog.jpeg"
import { MdSchedule } from "react-icons/md";




function Blog() {

 


    return ( 
        <div id="blog" className="blog">
            <h1 className="project_header">Blogs</h1>
        
            <div className="blog_box">
                    <div className="blog_detail">
                        <h1>Internshala Clone</h1>
                       <p><span>Nov 13, 2021</span> <span style={{marginLeft:"15px"}}><MdSchedule style={{marginLeft:"15px", marginRight:"5px", fontSize:"20px", marginBottom:"-4px" }}/>3 min read</span></p>
                       <p>It is a free portal for both interns as well as employers. Currently, Internshala has more than 3000000 student visits and 80000+ companies registered on its website....<a href="https://medium.com/@agarwalr327/internshala-clone-b4570b6e5594">read more</a>
                        </p>
                    </div>
 

                    <div className="blog_image">
                        <a href="https://medium.com/@agarwalr327/internshala-clone-b4570b6e5594"> <img src="https://miro.medium.com/max/945/1*Ns25fOa_E7fXCv0r9C6hhg.png" className="blog_img"/></a>         
                    </div>
                
            </div>
        </div>
    ) 
}

export default Blog
