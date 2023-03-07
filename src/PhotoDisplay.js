import React,{Component} from 'react';

const PhotoDisplay=({imageUrl})=>{
    return(
        <div className='tc' style={{height:"300px", width:"300px", margin:"auto"}}>
<img src={imageUrl} alt=''/>
        </div>
    )
}

export default PhotoDisplay;