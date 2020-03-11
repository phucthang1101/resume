import React, { Component } from "react";
import "./App.css";
import Main from "./components/main";
// import { Link } from 'react-router-dom';
import Flippy, { FrontSide, BackSide } from "react-flippy";
import {
  Tabs,
  Tab
} from "react-mdl";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import logo from "./images/logo.jpeg";
import avatar from "./images/avatar.jpg";
import personalWebsite from "./images/personalWebsite.png";
import ExpenseApp from "./images/ExpenseApp.png";
import NodeJS1 from "./images/NodeJS1.png";
import programmers from "./images/programmers.jpg";
import BannerImage from "./images/BannerImage.png";
import ThangResume from "./images/ThangResume.pdf";

import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Education from "./components/education";
import Experience from "./components/experience";
import Skills from "./components/skills";
import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";

const FlippyStyle = {
  width: "30%",
  height: "400px",
  textAlign: "center",
  color: "#FFF",
  fontFamily: "sans-serif",
  fontSize: "30px",
  justifyContent: "center"
};

const DefaultCardContents = ({ children, imgUrl }) => {
  return (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.9)",
            border:"1px solid"
        
        }}
      >
        <span
          style={{
            fontSize: "12px",
            position: "absolute",
            bottom: "10px",
            width: "100%"
          }}
        >
          {children}
          <br />
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: "#175852",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <div className="backsideFlip">
          <h5>Website:</h5>
          <p>
            <a href="https://github.com/phucthang1101/ViBotani" target="_blank">
              http://www.vibotani.com
            </a>
          </p>
          <h5>Achievements/Tasks:</h5>
          <p>
            Implement Admin Panel as well as set up and connect to MSSQL to
            display data in UI
          </p>
          <p>
            Practice to get used to with HTML, CSS and Boostrap to make website
            responsive
          </p>
          <h5>Start - Finish</h5>
          <p>06/2019 - 08/2019</p>
          <p>Note: Last time I checked this website is no longer accessible so I put the Github link of this project instead. Thank you!</p>
        </div>
        <span
          style={{
            fontSize: "12px",
            position: "absolute",
            bottom: "10px",
            width: "100%"
          }}
        >
          {children}
          <br />
          (Click to Flip back)
        </span>
      </BackSide>
    </React.Fragment>
  );
};

const DefaultCardContents2 = ({ children, imgUrl }) => {
    return (
      <React.Fragment>
        <FrontSide
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.9)",
            border:"1px solid"
          }}
        >
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%"
            }}
          >
            {children}
            <br />
          </span>
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "#175852",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <div className="backsideFlip">
            <h5>Website:</h5>
            <p>
              <a href="https://github.com/phucthang1101/YuriVisa_V2" target="_blank">
                http://www.yurivisa.com
              </a>
            </p>
            <h5>Achievements/Tasks:</h5>
            <p>
            Design database and connect to ASP.NET MVC using Entity Framework to perform CRUD action and build muti-language function
            </p>
            
            <h5>Start - Finish</h5>
            <p>01/2019 - 05/2019</p>
            <p>Note: Last time I checked this website is no longer using my team's project so I put the Github link of this instead. Thank you!</p>
          </div>
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%"
            }}
          >
            {children}
            <br />
            (Click to Flip back)
          </span>
        </BackSide>
      </React.Fragment>
    );
  };
const DefaultCardContents3 = ({ children, imgUrl }) => {
    return (
      <React.Fragment>
        <FrontSide
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.9)",
            border:"1px solid"
          }}
        >
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%"
            }}
          >
            {children}
            <br />
          </span>
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "#175852",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <div className="backsideFlip">
            <h5>Website:</h5>
            <p>
              <a href="http://daidung.com.vn/" target="_blank">
              http://daidung.com.vn/
              </a>
            </p>
            <h5>Achievements/Tasks:</h5>
            <p>
                Implement design from .pdf file using HTML,CSS and Bootstrap to make website responsive and JS to add effect.
                
                <br/>Store data useing MSSQL,create Admin Panel ,use Entity Framework to perform CRUD action, deploy to Windows Hosting.
             </p>
           
            
            <h5>Start - Finish</h5>
            <p>10/2019 - 02/2020</p>
          </div>
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%"
            }}
          >
            {children}
            <br />
            (Click to Flip back)
          </span>
        </BackSide>
      </React.Fragment>
    );
  };
  const DefaultCardContents4 = ({ children, imgUrl }) => {
    return (
      <React.Fragment>
        <FrontSide
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.9)",
            border:"1px solid"
          }}
        >
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%"
            }}
          >
            {children}
            <br />
          </span>
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "#175852",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <div className="backsideFlip">
            <h5>Website:</h5>
            <p>
              <a href="https://phucthang1101.github.io/resume/" target="_blank">
              https://phucthang1101.github.io/resume/
              </a>
            </p>
            <h5>Achievements/Tasks:</h5>
            <p>
            Using ReactJS to build personal website.
            <br/>Deploy to Github Pages.
             </p>
           
            
            <h5>Start - Finish</h5>
            <p>01/2020 - 02/2020</p>
          </div>
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%"
            }}
          >
            {children}
            <br />
            (Click to Flip back)
          </span>
        </BackSide>
      </React.Fragment>
    );
  };
  const DefaultCardContents5 = ({ children, imgUrl }) => {
    return (
      <React.Fragment>
        <FrontSide
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.9)",
            border:"1px solid"
          }}
        >
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%"
            }}
          >
            {children}
            <br />
          </span>
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "#175852",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <div className="backsideFlip">
            <h5>Website:</h5>
            <p>
              <a href="https://mysterious-cliffs-96399.herokuapp.com/" target="_blank">
              https://mysterious-cliffs-96399.herokuapp.com/
              </a>
            </p>
            <h5>Achievements/Tasks:</h5>
            <p>
            First time working with MERN stack.
            <br/>Use NodeJS and ExpressJS to work on server-side.
            <br/>Implement action as well as reducers to handle request use Hook in ReactJS.
            <br/>Store data in MongoDB Atlas.
            <br/>Deploy to Heroku.
             </p>
           
            
            <h5>Start - Finish</h5>
            <p>02/2020 - 02/2020</p>
          </div>
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%"
            }}
          >
            {children}
            <br />
            (Click to Flip back)
          </span>
        </BackSide>
      </React.Fragment>
    );
  };
  const DefaultCardContents6 = ({ children, imgUrl }) => {
    return (
      <React.Fragment>
        <FrontSide
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.9)",
            border:"1px solid"
          }}
        >
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%"
            }}
          >
            {children}
            <br />
          </span>
        </FrontSide>
        <BackSide
          style={{
            backgroundColor: "#175852",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <div className="backsideFlip">
            <h5>Website:</h5>
            <p>
              <a href="https://github.com/phucthang1101/NodeJS_MongoDB_CRUD" target="_blank">
               Employee List + CRUD
              </a>
            </p>
            <h5>Achievements/Tasks:</h5>
            <p>
            First time working with NodeJS and MongoDB.
            <br/>Use NodeJS and ExpressJS to work on server-side.
            <br/>Implement CRUD action and connect to MongoDB (local).
            <br/>Build UI using Handlebars.
            
             </p>
           
            
            <h5>Start - Finish</h5>
            <p>01/2020 - 01/2020</p>
          </div>
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              bottom: "10px",
              width: "100%"
            }}
          >
            {children}
            <br />
            (Click to Flip back)
          </span>
        </BackSide>
      </React.Fragment>
    );
  };
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      hidden: false,
      scrollingLock: false,
      navbarTop: 470
    };
    // Bind the function to this component, so it has access to this.state
    // this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var navbar = document.getElementById("navbar");
    const navbarTop = navbar.offsetTop;
    var { pageYOffset } = window;
    if (pageYOffset === 0) {
      this.setState({
        navbarTop: navbarTop
      });
    }

    if (pageYOffset > this.state.navbarTop) {
      this.setState({
        scrollingLock: true
      });
    } else {
      this.setState({
        scrollingLock: false
      });
    }
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <div
            style={{
              display: "flex",
              flex: "1 0 200px",
              justifyContent: "space-around",
              "flex-wrap": "wrap"
            }}
          >
            <Flippy
              ref={r => (this.flippyHorizontal = r)}
              flipOnClick={false}
              style={FlippyStyle}
            >
              <DefaultCardContents imgUrl={project1}>
                <button
                  type="button"
                  onClick={() => this.flippyHorizontal.toggle()}
                >
                  Detail
                </button>
              </DefaultCardContents>
            </Flippy>

            <Flippy
              ref={r => (this.flippyHorizontal2 = r)}
              flipOnClick={false}
              style={FlippyStyle}
            >
              <DefaultCardContents2 imgUrl={project2}>
                <button
                  type="button"
                  onClick={() => this.flippyHorizontal2.toggle()}
                >
                  Detail
                </button>
              </DefaultCardContents2>
            </Flippy>

            <Flippy
              ref={r => (this.flippyHorizontal3 = r)}
              flipOnClick={false}
              style={FlippyStyle}
            >
              <DefaultCardContents3 imgUrl={project3}>
                <button
                  type="button"
                  onClick={() => this.flippyHorizontal3.toggle()}
                >
                  Detail
                </button>
              </DefaultCardContents3>
            </Flippy>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <div
            style={{
              display: "flex",
              flex: "1 0 200px",
              justifyContent: "space-around",
              "flex-wrap": "wrap"
            }}
          >
            <Flippy
              ref={r => (this.flippyHorizontal3 = r)}
              flipOnClick={false}
              style={FlippyStyle}
            >
              <DefaultCardContents4 imgUrl={personalWebsite}>
                <button
                  type="button"
                  onClick={() => this.flippyHorizontal3.toggle()}
                >
                  Detail
                </button>
              </DefaultCardContents4>
            </Flippy>
          </div>
        </div>
     
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <div
          style={{
            display: "flex",
            flex: "1 0 200px",
            justifyContent: "space-around",
            "flex-wrap": "wrap"
          }}
        >
          <Flippy
            ref={r => (this.flippyHorizontal3 = r)}
            flipOnClick={false}
            style={FlippyStyle}
          >
            <DefaultCardContents6 imgUrl={NodeJS1}>
              <button
                type="button"
                onClick={() => this.flippyHorizontal3.toggle()}
              >
                Detail
              </button>
            </DefaultCardContents6>
          </Flippy>
        </div>
      </div>
   
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <div
          style={{
            display: "flex",
            flex: "1 0 200px",
            justifyContent: "space-around",
            "flex-wrap": "wrap"
          }}
        >
          <Flippy
            ref={r => (this.flippyHorizontal3 = r)}
            flipOnClick={false}
            style={FlippyStyle}
          >
            <DefaultCardContents5 imgUrl={ExpenseApp}>
              <button
                type="button"
                onClick={() => this.flippyHorizontal3.toggle()}
              >
                Detail
              </button>
            </DefaultCardContents5>
          </Flippy>
        </div>
      </div>
   
      );
    }
  }

  render() {
    
      var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
      };

      TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function() {
          that.tick();
        }, delta);
      };

      window.onload = function() {
        var elements = document.getElementsByClassName("typewrite");
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute("data-type");
          var period = elements[i].getAttribute("data-period");
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
      };
    
    return (
      <div className="wrap">
        <div className="snow_effect">
          <div className="landing-grids">
            <div className="avatarImg">
              <img
                src={BannerImage}
                alt="avatar"
                className="avatar-img"
              />
            </div>
            <h1>
              <a
                href="https://github.com/phucthang1101/NodeJS_MongoDB_CRUD"
                className="typewrite"
                data-period="2000"
                data-type='[ "Welcome to my website !", "I am Thang Tran.","Scroll down for more." ]'
              >
                <span className="wrap"></span>
              </a>
            </h1>
            <div className="banner-text">
              <h1>Software Developer</h1>

              <hr />
              <div className="banner-skills">
                <div className="skills">
                  <p>HTML/CSS </p>
                </div>
                <span className="divider"></span>
                <div className="skills">
                  <p>JavaScript </p>
                </div>
                <span className="divider"></span>
                <div className="skills">
                  <p>ASP.NET MVC </p>
                </div>
                <span className="divider"></span>
                <div className="skills">
                  <p>ReactJS </p>
                </div>
                <span className="divider"></span>
                <div className="skills">
                  <p>NodeJS </p>
                </div>
                <span className="divider"></span>
                <div className="skills">
                  <p>MSSQL & MongoDB </p>
                </div>
              </div>
              <div className="social-links">
                {/*Facebook*/}
                <a
                  href="https://www.facebook.com/thang.tran.3576224"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>

                {/* Github */}
                <a
                  href="https://github.com/phucthang1101"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/thang-tran-5b80461a2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Gmail */}
                <a
                  href="https://mail.google.com/mail/u/0/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-envelope"
                    style={{ paddingTop: "4px" }}
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>

          <div
            id="navbar"
            className="navigation-wrap  start-header start-style"
            style={{
              position: this.state.scrollingLock ? "fixed" : "relative"
            }}
          >
            {this.props.children}
            <div className="container navbar_container">
              <div className="row">
                <div className="col-12">
                  <nav className="navbar navbar-expand-md navbar-light">
                    <a
                      className="navbar-brand"
                      href="https://phucthang1101.github.io/resume/"
                      target="_blank"
                    >
                      {/* <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/logo.svg"
                        alt=""
                      /> */}
                      <img src={logo} alt="" />
                    </a>

                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      {/* <Scrollspy className="navbar-nav ml-auto py-4 py-md-0" 
                           items={ ['resume', 'about', 'projects','contact'] } 
                         currentClassName="active"
                         //  scrolledPastClassName="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                          //  onUpdate = {
                          // ()=> console.log(this)
                          //  }
                           > */}
                      <ul className="navbar-nav ml-auto py-4 py-md-0">
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                          {/* <a className="nav-link" href="#resume">Resume</a>
                           */}
                          <a
                            className="nav-link"
                            activeClass="active"
                            href={ThangResume}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Resume
                          </a>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          {/* <a className="nav-link" href="#about">About me</a> */}
                          <Link
                            className="nav-link"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            About me
                          </Link>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          {/* <a className="nav-link" href="#projects">Projects</a> */}
                          <Link
                            className="nav-link"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Projects
                          </Link>
                        </li>
                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                          {/* <a className="nav-link" href="#contact">Contact</a> */}
                          <Link
                            className="nav-link"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Contact
                          </Link>
                        </li>
                        {/* </Scrollspy> */}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="col-12 col-lg-6"></div>
            <div className="col-12 col-lg-6"></div>
          </div>
          <div id="contact" className="contact-body row mx-0 ">
            <div className="col-12 col-lg-6 contact-grid">
              <h2>Thang Tran</h2>
              <div className="contact_avatar">
                <img src={avatar} alt="avatar" style={{ height: "250px" }} />
              </div>
              <div className="myFav" style={{}}>
                <p>
                  Good self-studied ability, love solving problems and seek for
                  an opportunity to build programs that make Internet a more
                  beautiful and positive place.
                </p>
               
              </div>
            </div>
            <div className="col-12 col-lg-6 contact-grid">
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "30px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-phone-square" aria-hidden="true" />
                      <p>+84 933 071 936</p>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "30px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <p> phucthangvt1101@gmail.com</p>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "30px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-skype" aria-hidden="true" />
                      <p>live:phucthangvt1101</p>
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
          <div id="projects">
            <Tabs
              activeTab={this.state.activeTab}
              onChange={tabID => this.setState({ activeTab: tabID })}
              ripple
            >
              <Tab>ASP .NET MVC</Tab>
              <Tab>ReactJS</Tab>
              <Tab>NodeJS</Tab>
              <Tab>MERN Stack</Tab>
            </Tabs>
            <div className="content">{this.toggleCategories()}</div>
          </div>
          <div id="about">
            <Grid>
              <Cell col={4}>
                <div style={{ textAlign: "center",marginTop:"24px" }}>
                  <img
                    src={programmers}
                    alt="avatar"
                    style={{ height: "auto",width:"80%" }}
                  />
                </div>

                <h2 style={{ paddingTop: "2em",textAlign:"center" }}>Thang Tran</h2>
                <h4 style={{ color: "grey",textAlign:"center" }}>Programmer</h4>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <h6 style={{textAlign:"left"}}>
                  I am interested in solving math problems by applying Data structure
                  and Algorithm.
                </h6>
                <h6 style={{textAlign:"left"}}>My goal is to become Full Stack JS Developer </h6>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <h5>Address</h5>
                <p>300/112 Xo Viet Nghe Tinh Str, Binh Thanh Dist, Ho Chi Minh City</p>
                <h5>Phone</h5>
                <p>(+84) 933 07 1936</p>
                <h5>Email</h5>
                <p>phucthangvt1101@gmail.com</p>
                <h5>Web</h5>
                <p>https://phucthang1101.github.io/resume/</p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              </Cell>
              <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
                <Education
                  startYear={2015}
                  endYear={2017}
                  schoolName="Vung Tau High School"
                  schoolDescription="Basic knowledge in Math,Chemistry,Physics,...First time get to know what programming is study Pascal and especially when have a chance to approach Arduino "
                />
                <Education
                  startYear={2017}
                  endYear={"Present"}
                  schoolName="VNUHCM - University of Science"
                  schoolDescription="Subjects studied: System Operating, Web Developer(basic), Windows Application Programming(C#),Computer Networking,..."
                />
                <hr style={{ borderTop: "3px solid #e22947" }} />
                <h2>Experience</h2>
                <Experience
                  startYear={2018}
                  endYear={"Present"}
                  jobName="Freelance Developer"
                  jobDescription="Start learning to develope a website in the backend with C# and use database MSSQL then practice HTML, CSS, JS and Bootstrap to build responsive and cool UI/UX"
                  Company="YinYang Workshop"
                />
               
                <hr style={{ borderTop: "3px solid #e22947" }} />
                <h2>Skills</h2>
                <button class="btnSkills btn--stripe btn--radius">C/C++</button>
                <button class="btnSkills btn--stripe btn--radius">Javascript</button>
                <button class="btnSkills btn--stripe btn--radius">ASP.NET</button>
                <button class="btnSkills btn--stripe btn--radius">ReactJS</button>
                <button class="btnSkills btn--stripe btn--radius">HTML</button>
                <button class="btnSkills btn--stripe btn--radius">CSS</button>
                <button class="btnSkills btn--stripe btn--radius">NodeJS</button>
                <button class="btnSkills btn--stripe btn--radius">MongoDB</button>
                <button class="btnSkills btn--stripe btn--radius">MSSQL</button>
              </Cell>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
