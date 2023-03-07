import { Component } from "react";


class RegisterForm extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
        }
    }
    onNameChange=(event)=>{
        this.setState({name:event.target.value});
    }
    onEmailChange=(event)=>{
        this.setState({email:event.target.value});
    }
    onPasswordChange=(event)=>{
        this.setState({password:event.target.value});
    }
    
    registerFunction=()=>{
        fetch('http://localhost:3001/register',{
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                name:this.state.name,
                password: this.state.password,
            })
        }).then(response=>response.json())
        .then(user=>{
            if(user.user_id){
                this.props.updateSignedIn(true);
                this.props.loadUser(user);
            }else{
                console.log(user);
            }
        })

    }
    
    render(){

        return(
                <div className="pa4 w5 pt5 center br2 ba b--white mv4 w-100 w-50-m w-25-l">
                    <div
                    id="sign_up"
                    className="ba b--transparent ph0 mh0"
                    >
                    <legend className="f4 fw6 ph0 mh0">
                    Register Yourself 
                    </legend>
                    <div className="mt3">
                    <label
                    className="db fw6 lh-copy f6"
                    htmlFor="name"
                    >
                    Name
                    </label>
                    <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                    />
                    </div>
                    <div className="mt3">
                    <label
                    className="db fw6 lh-copy f6"
                    htmlFor="email-address"
                    >
                    Email
                    </label>
                    <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    />
                    </div>
                    <div className="mv3">
                    <label
                    className="db fw6 lh-copy f6"
                    htmlFor="password"
                    >
                    Password
                    </label>
                    <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                    />
                    </div>
                    </div>
                    <div className=" ml5">
                    <input
                    className="b ph3 pv2 input-reset ba b--black bg-yellow grow pointer f6 dib"
                    type="submit"
                    value="Register"
                    onClick={this.registerFunction}
                    />
                    </div>
                </div>
        )
    }
} 
export default RegisterForm;      