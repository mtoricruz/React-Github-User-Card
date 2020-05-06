import React from 'react';
import axios from 'axios';
import './App.css';

import Usercard from './components/Usercard'

export default class App extends React.Component {
  state = {
    usercard: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/mtoricruz')
      .then(res => {
        console.log(res.data)
        this.setState({ usercard: res.data })
      })
      .catch(err => console.log(err));

    axios
      .get('https://api.github.com/users/mtoricruz/followers')
      .then(res2 => {
        console.log(res2.data)
        this.setState({ followers: res2.data})
      })
      .catch(err => console.log(err));
  }


  render() {
    console.log('rendering component')
    return (
      <div className="App">
        <Usercard 
          usercard={this.state.usercard} 
          followers={this.state.followers}
        />
      </div>
    )
  }
}

