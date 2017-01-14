import React, { Component } from 'react';

import  Video  from './Video'

export default class Home extends Component {
  componentDidMount() {
   
  }


  render() {

    return (
      <div> 
        <div>
          <a href="/auth/twitter">Sign in with Twitter</a>
        </div>
        <Video />
      </div>


    )
  }
}