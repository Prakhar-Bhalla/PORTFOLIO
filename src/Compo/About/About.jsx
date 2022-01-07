import React from 'react'
import "./About.css"
import { FaCss3Alt, FaReact, FaHtml5, FaNode, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoLogoJavascript, IoMailSharp } from "react-icons/io5";
import { DiMongodb, DiFirebase } from "react-icons/di";
import { SiTypescript, SiRedux } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import home from "../../images/me4.jpg"
import Tooltip from '@material-ui/core/Tooltip';


   


const useStyles = makeStyles((theme) => ({ 
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }

}))
 





function About() {


    const classes = useStyles();

 


     
    return (
        <div id="about" className="about">
             <div className={classes.root}>

             <h1 className="project_header">About</h1>

             <Grid 
            container 
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center" 
            >
               
                <Grid item  xl={6} lg={6} md={6} sm={12} xs={12}>
                     <div className="about_left"> 
                     <div className="left_bar"></div>
                       <h1 style={{color:"white"}}>Skills</h1>
                        <div className="left_bar">
                        <Tooltip title={<h1 style={{ color: "white" }}>HTML</h1>}><div className="tech"> <FaHtml5 style={{color:"white", fontSize:"75px", margin:"5px"}}/></div></Tooltip>
                        <Tooltip title={<h1 style={{ color: "white" }}>CSS</h1>}><div className="tech"> <FaCss3Alt style={{color:"white", fontSize:"75px", margin:"5px"}}/> </div></Tooltip>
                         <Tooltip title={<h1 style={{ color: "white" }}>NodeJs</h1>}><div className="tech"><FaNode style={{color:"white", fontSize:"80px"}}/></div></Tooltip>
                        </div>
                        <div className="left_bar">
                        <Tooltip title={<h1 style={{ color: "white" }}>ReactJs</h1>}><div className="tech"> <FaReact style={{color:"white", fontSize:"80px"}}/></div></Tooltip>
                        <Tooltip title={<h1 style={{ color: "white" }}>Redux</h1>}><div className="tech"> <SiRedux style={{color:"white", fontSize:"80px"}}/></div></Tooltip>
                        <Tooltip title={<h1 style={{ color: "white" }}>JavaScript</h1>}><div className="tech"> <IoLogoJavascript style={{color:"white", fontSize:"70px", margin:"10px"}}/></div></Tooltip>
                        </div>
                        <div className="left_bar">
                        <Tooltip title={<h1 style={{ color: "white" }}>MongoDB</h1>}><div className="tech"> <DiMongodb style={{color:"white", fontSize:"80px"}}/>   </div></Tooltip>
                        <Tooltip title={<h1 style={{ color: "white" }}>TypeScript</h1>}><div className="tech"> <SiTypescript style={{color:"white", fontSize:"60px", margin:"15px"}}/> </div></Tooltip>
                        </div>       
                    </div> 
                </Grid>





                <Grid item  xl={6} lg={6} md={6} sm={12} xs={12}>
                    <div className="about_right">
                        <div className="info">
                     
                <div className="about_rightimg"><img src="https://media-exp1.licdn.com/dms/image/C5603AQGzE-UkvN7pVw/profile-displayphoto-shrink_800_800/0/1628441546557?e=1646870400&v=beta&t=QYd443va87luYt_UTXvcxqDOHFjsfFDTx6G-8c5PmIo" alt="" width="190px"/></div>

                        <h1>Prakhar Bhalla</h1>
               <h4 className="number">Full Stack Developer</h4>
               <p className="number"> <TiLocation/> Lakhimpur, Uttar Pradesh </p>    
               <p>
                <span>I am a passionate full stack developer skilled 
               in MERN Stack guided by Masai School, and a proud alumani of NIT Warangal. </span>
                <br/>
               <span> <br/> I am looking for opportunity to apply my knowledge and skills
               to be a valuable assets for organization and a better version of myself.</span>        
               </p>
               <p className="number"><FaPhoneAlt/> +91-7561818459</p>
               <p className="number"><IoMailSharp/> prakharbhalla2016@gmail.com</p> 
               <div style={{display:"flex", flexDirection:"row"}}> 
                   <a target="_blank" href="https://drive.google.com/file/d/1-hIhqonRfxDj89oj0-FI7DuO-Xz5AjJC/view?usp=sharing"><h3 style={{marginTop:"3px", fontSize:"20px", color:"white"}}>View Full Resume</h3></a> 
                </div>  
                        </div>                      
                    </div> 
                </Grid>

 
            </Grid>    
             </div>
        </div>
    )
}

export default About;






