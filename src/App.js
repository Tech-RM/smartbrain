import React , {Component} from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import RankDisplay from './RankDisplay';
import ImageInputField from './ImageInputField';
import PhotoDisplay from './PhotoDisplay';
import Forms from './Forms';
// import Clarifai from 'clarifai';


// const app=new Clarifai.App({
//   apiKey:''
// })

const initialState={
  imageUrl:'',
      isSignedIn:false,
      route:'home',
      user:{
        id:'',
        name:'',
        eamil:'',
        entries:'',
      }
}

class App extends Component{
  constructor(){
    super();
    this.state={
      imageUrl:'',
      isSignedIn:false,
      route:'home',
      user:{
        id:'',
        name:'',
        eamil:'',
        entries:'',
      }
    }
  }

loadUser=(data)=>{
  this.setState({user:{
    id:data.user_id,
    name:data.name,
    email:data.email,
    entries:data.entries,
  }})
}


  onInputChange=(e)=>{
    this.setState({imageUrl:e.target.value})
  }
  onButtonSubmit=()=>{
    fetch('http://localhost:3001/image',{
      method:'put',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        id:this.state.user.id
      })
    }).then(response=>response.json())
    .then(data=>{
      let user = {...this.state.user, entries: data[0].entries};
        this.setState({user});

    })
  }

  //this function will update the state with current route;
  changeRoute=(input)=>{
    this.setState({route:input})
  }

  updateSignedIn=(isSignedIn)=>{
    this.setState({isSignedIn:isSignedIn});
  }
  resetState=()=>{
    this.setState(initialState);
  }



  render(){
    console.log(this.state);
    return (this.state.isSignedIn?
      <div>
        <Navigation 
        isSignedIn={this.state.isSignedIn} 
        changeRoute={this.changeRoute}
        updateSignedIn={this.updateSignedIn} />
        <Logo />
        <RankDisplay name={this.state.user.name} entries={this.state.user.entries}/>
        <ImageInputField onChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <PhotoDisplay imageUrl={this.state.imageUrl}/>
      </div>
      :
      this.state.route==='home'?
      <div>
          <Navigation 
          isSignedIn={this.state.isSignedIn} 
          changeRoute={this.changeRoute}
          updateSignedIn={this.updateSignedIn} 
          />
          <Logo resetState={this.resetState}/>
          <p className='tc dark-blue ml-auto mr-auto w-70 system-sans-serif b f1'
            >Welcome to our SMART World!!!!!
          </p>
        </div>
         :
         this.state.route==='register'||this.state.route==='signIn'?
         <div>
              <Navigation 
              isSignedIn={this.state.isSignedIn} 
              resetState={this.resetState}
              changeRoute={this.changeRoute}
              updateSignedIn={this.updateSignedIn} 
              />
              <Logo resetState={this.resetState}/>
              <Forms 
              currentRoute={this.state.route} 
              updateSignedIn={this.updateSignedIn}
              loadUser={this.loadUser}
              />
        </div>
        :<div></div>
        
        
      
    );
  }
}
export default App;
