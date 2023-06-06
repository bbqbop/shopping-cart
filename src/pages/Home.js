import logo from '../assets/pictures/wallpaper.png'

export default function Home(){
    return (
        
        <div className='home'>
            <h1>Dino Delights</h1>
            <h2>Your place to make your dinosaur happy!</h2>
        <img src={logo} />
        
        </div>
    )
}