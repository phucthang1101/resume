import React,{Component} from 'react'


class LandingPage  extends Component{
    render(){
    return(
        <div className="landing-grids">
            <div className="avatarImg">
                <img
                    src="https://s3.amazonaws.com/workstory/images/verge.jpg"
                    alt="avatar"
                    className="avatar-img"
                />

            </div>
            <div className="banner-text">
                <h1>Full Stack Web Developer</h1>

                <hr />
                <div className="banner-skills">
                    <div className="skills" >
                        <p>HTML/CSS </p>
                    </div>
                    <span className="divider"></span>
                    <div className="skills" >
                        <p>Bootstrap </p>
                    </div>
                    <span className="divider"></span>
                    <div className="skills" >
                        <p>JavaScript </p>
                    </div>
                    <span className="divider"></span>
                    <div className="skills" >
                        <p>ReactJS </p>
                    </div>
                    <span className="divider"></span>
                    <div className="skills" >
                        <p>ASP.NET MVC  </p>
                    </div>
                    <span className="divider"></span>
                    <div className="skills" >
                        <p>MSSQL </p>
                    </div>
                </div>
                <div className="social-links">
                    {/*Facebook*/}
                    <a href="https://www.facebook.com/thang.tran.3576224" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </a>

                    {/* Github */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                    {/* LinkedIn */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                     {/* Gmail */}
                     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                     <i class="fa fa-envelope" style={{paddingTop: "4px"}} aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
}

export default LandingPage ;