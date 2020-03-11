import React,{Component} from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';




const FlippyStyle = {
    width: '30%',
    height: '400px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center'
  }
  
  
const DefaultCardContents = ({children,imgUrl}) => {
    return(
     <React.Fragment>
      <FrontSide
        style={{
                  backgroundImage: `url(${imgUrl})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.9)'
              }}
      >
      
     
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}<br />
        
        </span>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#175852',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
          
        }}>
        ROCKS
        <span 
          style={{
            fontSize:'12px',
            position: 'absolute',
            bottom: '10px',
            width: '100%'
          }}>
          {children}<br />
          (BACK SIDE)
        </span>
      </BackSide>
  </React.Fragment>);

};
    
class Projects extends Component {
    constructor(props){
        super(props);
        this.state={
           activeTab:0
        };
    }
    toggleCategories() {

        if(this.state.activeTab === 0){
          return(
            <div className="projects-grid">
              {/* Project 1 */}
              <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
            <Flippy
           
              ref={(r) => this.flippyHorizontal = r}
              flipOnClick={false}
              style={FlippyStyle}
            >
            <DefaultCardContents imgUrl={project1}>
              
              <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Detail</button>
            </DefaultCardContents>
          </Flippy>


          <Flippy
              ref={(r) => this.flippyHorizontal2 = r}
              flipOnClick={false}
              style={FlippyStyle}
            >
            <DefaultCardContents imgUrl={project2}>
             
              <button type="button" onClick={() => this.flippyHorizontal2.toggle()}>Detail</button>
            </DefaultCardContents>
          </Flippy>



          <Flippy
              ref={(r) => this.flippyHorizontal3 = r}
              flipOnClick={false}
              style={FlippyStyle}
            >
            <DefaultCardContents imgUrl={project3}>
            
              <button type="button" onClick={() => this.flippyHorizontal3.toggle()}>Detail</button>
            </DefaultCardContents>
          </Flippy>
          </div>
            </div>
          )
        } else if(this.state.activeTab === 1) {
          return (
            <div><h1>This is Angular</h1></div>
          )
        } else if(this.state.activeTab === 2) {
          return (
            <div><h1>This is VueJS</h1></div>
          )
        } else if(this.state.activeTab === 3) {
          return (
            <div><h1>This is MongoDB</h1></div>
          )
        }
      }


    render(){
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
                    <Tab>ASP .NET MVC</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>Microservice</Tab>
                </Tabs>
                <div className="content">{this.toggleCategories()}</div>
            </div>
        )
    }
}
  
export default Projects;