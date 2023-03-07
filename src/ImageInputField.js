
const ImageInputField=({onChange, onButtonSubmit})=>{
    return(
        <div style={{backgroundColor:"red"}} className='w-40 tc pa3 mb3 ml-auto mr-auto bw2'>
            <input 
            onChange={onChange}
            placeholder='Your image url please'/>
            <button 
            className='pointer ml2'
            onClick={onButtonSubmit}
            >Detect</button>
        </div>
    )
}

export default ImageInputField;