import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <h4 style={{marginTop:'0px'}}>{this.props.Company}</h4>
        </Cell>
        <Cell col={6}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <p style={{textAlign:"left"}}>{this.props.jobDescription}</p>
        </Cell>
        <Cell col={2}>
        <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;