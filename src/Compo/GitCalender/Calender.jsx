import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import "./Calender.css"


function Calender() {




    return (
        <div className="cal_main">

            <div className="cal_banner">
            <p><img src="https://github-readme-stats.vercel.app/api?username=Prakhar-Bhalla&show_icons=true&locale=en&theme=tokyonight" alt="PrakharBhalla" className="cal_p"/></p>
            <p><img src="https://github-readme-streak-stats.herokuapp.com/?user=Prakhar-Bhalla&theme=highcontrast" alt="github_stats" className="cal_p"/></p>
            </div>    
            <GitHubCalendar username="Prakhar-Bhalla" />     
        </div>
    )
}

export default Calender
