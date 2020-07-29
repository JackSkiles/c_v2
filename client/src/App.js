import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer'
import firebase from './firebase'
import {storage} from './firebase';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
    }
  }

  // componentDidMount(){
  //   storage.ref('sermons').child('bakamitai.mp3').getDownloadURL().then(url => {
  //     console.log(url);
  //     this.setState({url});
  // })
  // }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} /> 
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
  }

export default App;
