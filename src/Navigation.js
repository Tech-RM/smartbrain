import React,{Component} from 'react';


class Navigation extends Component{

    signOut=()=>{
        this.props.updateSignedIn(false);
        this.props.changeRoute('home');
        this.props.resetState();
    }

    render(){
        const {isSignedIn,changeRoute}=this.props;

            return(
                
                isSignedIn?
                <div style={{display:"flex", justifyContent:"flex-end"}}>
                    <p className='pr3 pointer'
                        onClick={this.signOut}
                        >SignOut
                    </p>
                </div>
            :
            (
                <div style={{display:"flex", justifyContent:"flex-end"}}>
                    <p className='pr3 pointer'
                        onClick={()=>changeRoute('signIn')}
                        >SignIn
                    </p>
                    <p className='pr3 pointer'
                        onClick={()=>changeRoute('register')}
                        >Register
                    </p>
                </div>
            ))
        }  
}

export default Navigation;