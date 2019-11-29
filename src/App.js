import React, { Component } from 'react';
import './App.css';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import Product from './Components/Product';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import one from './images/one.jpg';
import six from './images/six.jpg';
import three from './images/three.jpg';
import four from './images/four.jpg';
import five from './images/five.jpg';
import gitHubLogo from './images/github-logo.svg';
import Footer from './Components/Footer';
import secrets from './secrets.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  render() {
    return (
      <Router>
        <div className="fullBody">
          <Navbar />

          <div >
            <Route exact path="/" render={()=><Home endpoint={`${secrets.scoopServer}/homePage`} picture={one} pageName="Scoop" />} />
            <Route path="/myFeed" render={()=><Container endpoint={`${secrets.scoopServer}/myFeed`} picture={six} pageName="My Feed" />} />
            <Route path="/myWatchlist" render={()=><Container endpoint={`${secrets.scoopServer}/myWatchlist`} picture={three} pageName="My Watchlist" />} />
            <Route path="/reverbDeals" render={()=><Container endpoint={`${secrets.scoopServer}/reverbDeals`} picture={four} pageName="Reverb Deals" />} />
            <Route path="/scoopDeals" render={()=><Container endpoint={`${secrets.scoopServer}/scoopDeals`} picture={five} pageName="Scoop Deals" />} />
            {/* <Route path="/product" render={()=><Product endpoint={`${secrets.scoopServer}/scoop/product`} />} /> */}
          </div>
          <Footer githubLogo={gitHubLogo}/>
        </div>
      </Router>
    );
  }
}

export default App;
