import './PhotoDisplay.css';
const PhotoDisplay=({box,imageUrl})=>{
    return(
        <div className='AppCenter ma'>
            <div className='absolute mt2' style={{height:"300px", width:"auto"}}>
                <img id='inputImage' src={imageUrl} alt='' style={{height:"300px"}}/>
                <div id='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

                </div>
            </div>
        </div>
    )
}

export default PhotoDisplay;