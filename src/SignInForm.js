import { Component } from "react";

class SignInForm extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
        }
    }
    render(){

        const emailChange=(event)=>{
            this.setState({email:event.target.value});
        }

        const passwordChange=(event)=>{
            this.setState({password:event.target.value});
        }

        const signInFunction=()=>{
            fetch('https://smartbrainapi-jrj1.onrender.com/signin',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            }).then(response=>response.json())
            .then(user=>{
                if(user.user_id){
                    this.props.updateSignedIn(true);
                    this.props.loadUser(user);
                }else{
                    console.log(user)
                }
                
            }
                
            )
        }
        return(
        
            <div className="pa4 w5 pt5 center br2 ba b--white mv4 w-100 w-50-m w-25-l">
                <fieldset
                id="sign_up"
                className="ba b--transparent ph0 mh0"
                >
                <legend className="f4 fw6 ph0 mh0 tc">
                Sign In
                </legend>
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
                onChange={emailChange}
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
                onChange={passwordChange}
                />
                </div>
                </fieldset>
                <div className="tc">
                <input
                className="b ph3 pv2 input-reset ba b--black bg-green grow pointer f6 dib"
                type="submit"
                value="SignIn"
                onClick={signInFunction}
                />
                </div>
            </div>
        )
    } 
}
export default SignInForm;      