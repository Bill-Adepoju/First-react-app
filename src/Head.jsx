import userImage from  './assets/userimage.png'

export default function Head(){
    return(
        <div className='head'>
            <div className='imgHead'>
                <img src={userImage} alt="user image" />
            </div>
            
        </div>
    )
}