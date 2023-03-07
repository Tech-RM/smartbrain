import { Component } from "react";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";

const Forms=({currentRoute,updateSignedIn,loadUser})=>{
        //using switch statement....
        let form;
        switch(currentRoute){
            case "register" : form=<RegisterForm updateSignedIn={updateSignedIn} loadUser={loadUser}/>;
            break;
            case "signIn" : form=<SignInForm updateSignedIn={updateSignedIn} loadUser={loadUser}/>;
                break;
            default: form=<p>Bad Request</p>
            
        }
        return form;
        
}


export default Forms;