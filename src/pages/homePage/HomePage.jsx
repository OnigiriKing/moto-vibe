import Welcome from "./components/Welcome"
import { Request } from "./components/Request"
import Advantages from "./components/Advantages"
import { Models } from "./components/BikeModels"
import { ChooseUs } from "./components/ChooseUs"
import Reviews from "./components/Reviews"
import Questions from "./components/Questions"
import Advertisement from "./components/Advertisement";
import RequestMenu from "./components/RequestMenu"


export default function HomePage() {

    return (
        <div id="home-page">
        <Welcome />
        <Request />
        <Advantages />
        <Models />
        <ChooseUs />
        <Reviews />
        <Questions />
        <Advertisement />
        {/* <RequestMenu /> */}
        </div>
    )
}