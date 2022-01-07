import React from 'react'
import "./Project.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ipo from "../../images/ipo.gif"
import shine from "../../images/shine.gif"
import wa from "../../images/wa.gif"
import hs from "../../images/hs.gif"
import { FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiRedux, SiMaterialUi } from "react-icons/si";
import { green } from '@material-ui/core/colors';
import { IoMailSharp } from "react-icons/io5";


  
const useStyles = makeStyles((theme) => ({ 
    root: {
        flexGrow: 1,
      }, 
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },

      btn: {
          backgroundColor:"#3498db"
      }

}))




function Project() { 


    const classes = useStyles();


    return (
        <div id="projects" className="project">
            <h1 className="project_header">Projects</h1>
            <br/><br></br>

           



           <div className={classes.root}>

            <Grid 
            container 
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
             
               <Grid item  xl={6} lg={6} md={6} sm={12} xs={12} className="projectdiv">
                   <Paper>
                   <div className="container">
                      <div className="content">
                          <div className="content-overlay"></div>
                          <img src="https://miro.medium.com/max/945/1*5fBYaZ3Y4kX9OkxuQa-RtA.png" alt="shine" className="shine_img"/>
                          <div class="content-details fadeIn-top">
                            <h3>Internshala Clone</h3>
                            <p>E-Training Website</p>

                            
                          </div>
                      </div>

                      <div className="gitlive">
                                <a href="https://github.com/vsrathod39/internshala.com_clone.io.git"
                                 target="_blank"
                                >  <Button className={classes.btn} variant="contained" style={{fontSize:"14px"}}>GitHub</Button>
                                </a> 
                            <div style={{width:"20px"}} />
                            <a href="http://ec2-35-154-40-77.ap-south-1.compute.amazonaws.com/"
                            target="_blank"
                            >  
                            <Button className={classes.btn} variant="contained" style={{fontSize:"14px"}}>Live</Button>
                                </a> 
                            </div>
                      </div> 
                  
                   </Paper>
               </Grid>

               <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="projectdiv">
                   <Paper>
                     <div className="container1">
                      <div className="content1">
                      <h4>Internshala Clone</h4>
                          <p>Internshala is an internship and online training platform, based in Gurgaon, India.
                          </p>
                          <p>
                              Project duration: 7 days
                          </p>
                          <p>
                             TechStack: Html 5, CSS 3 , JavaScript, MongoDB, Express, NodeJs 
                          </p>
                          <p>
                             Team: 6 members 
                          </p>
    
                      </div>
                      <div>
                        <FaHtml5 style={{color:"#475569", fontSize:"40px", margin:"5px"}}/>
                        <FaCss3Alt style={{color:"#475569", fontSize:"40px", margin:"5px"}}/> 
                         <DiMongodb style={{color:"#475569", fontSize:"40px"}}/>
                         <IoLogoJavascript style={{color:"#475569", fontSize:"40px"}}/>
                       </div>
                      </div>                                    
                   </Paper>
               </Grid>




               <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="projectdiv">
                   <Paper>
                     <div className="container1">
                      <div className="content1">
                      <h4>Max Fashion</h4>
                          <p>Max-Fashion is an E-Commerce website which was launched in UAE in 2004 while came in India in 2006 and expanded the roots in more than 60 cities of India.
                          </p>
                          <p>
                              Project duration: 6 days
                          </p>
                          <p>
                          TechStack: Html 5, CSS 3 , JavaScript 
                          </p>
                          <p>
                             Team: 3 members 
                          </p>


                        </div>
                        <div>
                        <FaHtml5 style={{color:"#475569", fontSize:"40px", margin:"5px"}}/>
                        <FaCss3Alt style={{color:"#475569", fontSize:"40px", margin:"5px"}}/> 
                         <IoLogoJavascript style={{color:"#475569", fontSize:"40px"}}/>
                       </div>
                      </div>                                    
                   </Paper>
               </Grid>
               




               <Grid item  xl={6} lg={6} md={6} sm={12} xs={12} className="projectdiv">
                   <Paper>     
                   <div className="container">
                      <div className="content">
                      <div className="content-overlay"></div>
                          <img className="ss_img" src="https://user-images.githubusercontent.com/91533026/138555383-2442dc41-d356-44e9-80a7-97cf13ef4fbc.PNG" alt="shopperstop"/>
                          <div class="content-details fadeIn-top">
                            <h3>Max Fashion</h3>
                            <p>E-Commerce website</p>
                           
                          </div>
                      </div>
                     
                      <div className="gitlive">
                                <a href="https://github.com/arai5563/Max-Fashion" target="_blank">  <Button className={classes.btn}  variant="contained" style={{fontSize:"14px"}}>GitHub</Button>
                                </a> 
                            <div style={{width:"20px"}} />
                            <a href=""
                            target="_blank"
                            >  <Button className={classes.btn}  variant="contained" style={{fontSize:"14px"}}>Live</Button>
                                </a> 
                            </div>

                      </div>        
                   </Paper>
               </Grid>






               


               



              




               
            
            </Grid>

            </div>
            
        </div>
    ) 
}

export default Project
