// import {PartyBus, Camaros} from '../../Images'
import '../AboutPage/AboutPage.css'
// import Camaros from '../../images/index'
import {CamaroCars,PartyBus} from '../../images'

const AboutPage = () => {


    return ( 
        <>
        <div className='title'><h1>Our Rides</h1></div>
        <div className='container cards'>
            <div class="card sel-card">
                <img src={CamaroCars} class="card-img-top" alt="Fissure in Sandstone" />
                <div class="card-body">
                    <h5 class="card-title">Modified Camaros</h5>
                    <p class="card-text">Looking for a fun ride? All vehicles in our Camaro fleet are one-of-a-kind upgraded vehicles that not only look flashy,
                     but also make for a much more enjoyable ride than your average grocery getter. Each Camaro can safely hold three people, but don’t panic! For parties larger than three,
                      you can request multiple Camaro's for no additional fee! We guarantee a freshly cleaned interior for every ride, and each car is fitted with an phone hookup for any passenger to 
                      connect and jam to their own music.</p>
                    <a href="#!" class="btn btn-primary">Request a Ride</a>

                </div>
            </div>
            <div class="card sel-card">
                <img src={PartyBus} class="card-img-top" alt="Fissure in Sandstone" />
                <div class="card-body">
                    <h5 class="card-title">Party Bus</h5>
                    <p class="card-text">Nope, we don’t just run Camaros here at Camaro Cab (Why would you think that?). You can now request a bus for transportation
                    of larger groups and even reserve the bus for your own private parties! Our bus can hold 45 people.
                    Prices start at $150/hour for a private party, or $45 for a single ride to transport your group anywhere around town.</p>
                    <a href="#!" class="btn btn-primary">Reserve a Party Bus</a>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default AboutPage;