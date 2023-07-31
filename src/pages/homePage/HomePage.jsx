import Welcome from "./components/Welcome"
import { Request } from "./components/Request"
import Advantages from "./components/Advantages"
import { Models } from "./components/BikeModels"
import { ChooseUs } from "./components/ChooseUs"
import Reviews from "./components/Reviews"


export default function HomePage() {

    return (
        <div id="home-page">
        <Welcome />
        <Request />
        <Advantages />
        <Models />
        <ChooseUs />
        <Reviews />
        </div>
    )
}