
function capitalizeFirstLetter(str) {
    const str1=str.toLowerCase();

    // converting first letter to uppercase
    const capitalized = str1.charAt(0).toUpperCase() + str1.slice(1);

    return capitalized;
}

const RankDisplay=({name,entries})=>{
    return(
        <div className='tc pt5'>
            <p className='fw8 f3'>Hi {capitalizeFirstLetter(name)}, Your current photo count is.......</p>
            <h1>#{entries}</h1>
        </div>
    )
}

export default RankDisplay;