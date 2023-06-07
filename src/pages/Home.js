import wallpaper from '../assets/pictures/wallpaper.png'
import './Home.css';


export default function Home(){
    return (
        
        <div className='home'>
            <img src={wallpaper} alt="A pet-dino and its owner" id="wallpaper"/>
            <h1>Dino Delights</h1>
            <h2>Your One-Stop Shop for All Your Pet-Dino Needs!</h2>
            {/* <section>
                At Dino Delights, we understand the unique bond between humans and their prehistoric pals. Whether you're a seasoned dino owner or considering adopting your very first pet dinosaur, we've got you covered!
            </section> */}
            <section>
                Discover a wide range of dino essentials, from nutritious dinosaur diets and specialized habitat supplies to fashionable dino accessories and interactive toys. Our curated collection is designed to enhance the well-being and happiness of your beloved pet dinosaurs.
            </section>
            <br />
            {/* <section>
                Why choose Dino Delights?
                <ul>   
                    <li>Quality Assurance: We source the finest products to ensure the utmost comfort and safety for your pet dinosaurs.</li>
                    <li>Expert Guidance: Our team of dino enthusiasts is here to provide personalized advice and answer all your dino-related questions.</li>
                    <li>Unleash the Style: Explore our exclusive range of fashionable accessories to showcase your dino's unique personality.</li>
                    <li>Playtime Galore: Engage your pet dinosaurs with our selection of interactive toys and games, fostering a strong bond between you and your prehistoric companions.</li>
                    <li>Convenient Shopping: With our user-friendly website and fast delivery, shopping for your pet dinosaurs has never been easier.</li>
                </ul>
            </section> */}
            <section>
                Join the Dino Delights family today and embark on a delightful journey with your pet dinosaurs. Experience the joy, adventure, and endless love that comes with being a dino owner.
            </section>
            <br />
            <section>
                Remember, at Dino Delights, we believe that every dino deserves the very best. Your happiness is our Jurassic pleasure!"
            </section>
            <h3>
                Let the excitement of owning a pet dinosaur come to life with Dino Delights, your trusted companion in the world of pet-dino care.
            </h3>
        </div>
    )
}