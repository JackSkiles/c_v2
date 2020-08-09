import React, {Component} from 'react';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import LogIn from './components/LogIn'
import Directory from './components/Directory';
import Sermons from './components/Sermons';
import Register from './components/register';
import LoginAdmin from './components/LoginAdmin';
import Upload from './components/Upload';
import Contact from './components/Contact';

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
            <Route path='/admin' exact component={LoginAdmin} />
            <Route path='/upload' exact component={Upload} />
            <Route path="/register" exact component={Register} />
            <Route path="/services" exact component={Services} />
            <Route path="/directory" exact component={Directory}/> 
            <Route path="/sermons" exact component={Sermons}/>
            <Route path="/login" exact component={LogIn} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      </div>
    )
  }
  }


export default App;
