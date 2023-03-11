import React , {Component} from 'react';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation';
import RankDisplay from './Components/RankDisplay';
import ImageInputField from './Components/ImageInputField';
import PhotoDisplay from './Components/PhotoDisplay';
import Forms from './Components/Forms/Forms';


const initialState={
  imageUrl:'',
      isSignedIn:false,
      route:'home',
      user:{
        id:'',
        name:'',
        eamil:'',
        entries:'',
      },
      box:{}
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
      },
      box:{}
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
    this.setState({
      imageUrl:e.target.value,
    box:{}});
  }
  calculateFaceLocation=(data)=>{
    console.log(data);
    const inputImage=document.getElementById('inputImage');
    const width=Number(inputImage.width);
    const height=Number(inputImage.height);
    return {
      leftCol : data.left_col*width,
      topRow : data.top_row*height,
      rightCol : width-data.right_col*width,
      bottomRow : data.bottom_row*height
    }

  }

  displayBoundingBox=(dataOfLines)=>{
    this.setState({box:dataOfLines});

  }


  onButtonSubmit=()=>{
    fetch('https://smartbrainapi-jrj1.onrender.com/image',{
      method:'put',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        id:this.state.user.id,
        url:this.state.imageUrl
      })
    }).then(response=>response.json())
    .then(data=>{
      this.displayBoundingBox(this.calculateFaceLocation(data));
      // let user = {...this.state.user, entries: data[0].entries};
      //   this.setState({user});
        console.log(data);

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
        <PhotoDisplay box={this.state.box} imageUrl={this.state.imageUrl}/>
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
