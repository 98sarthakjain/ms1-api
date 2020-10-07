import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Particles from 'react-particles-js';
import './App.css';
const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState={
  input:'',
      route:'Signin',
      isSignedIn: false,
      user:{
            id:'',
            name:'',
            email:'',
            entries: 0,
            joined: ''
}
}

class App extends Component{
  constructor(){
    super(); 
    this.state= initialState;
    }
  

loadUser=(data)=>{
  this.setState({user:{
            id: data.id,
            name:data.name,
            email:data.email,
            entries: data.entries,
            joined: data.joined
 }})
}
 
  onInputChange = (event) =>
  {
    console.log(event.target.value);
  }
  onButtonSubmit =()=>{
    console.log('click');
  }

  
  onRouteChange=(route)=>{
    if (route==='signout'){
      this.setState({initialState})
    }
    else if (route==='home'){
      this.setState({isSignedIn: true})
    }
   this.setState({route : route});
  }

  render(){ 
   const {isSignedIn,route} = this.state;
      return (
        <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
               <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
              {route==='home' ?
              <div>
             
              <Logo/>
              <Rank/>
              <ImageLinkForm onInputChange={this.onInputChange}
               onButtonSubmit={this.onButtonSubmit}/>
         </div>    
               
              :(
                this.state.route==='Signin'?
                <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              )
             
      }
       </div>
      );
  };

}

//app

export default App;
