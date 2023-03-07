
import brainLogo from './brainLogo.jpg';

const Logo=({resetState})=>{
    return(
        <div className='pa1 bg-blue nt4 pointer' 
        style={{height:"50px", width:"50px"}}
        onClick={resetState}>
            <img src={brainLogo} alt='logo' />
        </div>
    )
}

export default Logo;