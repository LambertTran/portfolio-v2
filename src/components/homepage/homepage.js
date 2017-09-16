import React,{Component} from 'react';
import 'particles.js/particles';
/** import components **/
import NavBar from '../share/navbar';
import HomeContents from './homepage-contents';
const particlesJS = window.particlesJS;

class HomePage extends Component{

  componentDidMount(){
    particlesJS.load('particles-js', 'particle.json', function() {
      console.log('callback - particles-js config loaded');
    });
  }

  render(){
    
    return(
      <div id="particles-js">
        <NavBar />
        <HomeContents />
      </div>
    )
  }
}

export default  HomePage;