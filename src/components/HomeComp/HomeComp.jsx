import Welcome from "./HomeComp.Welcome/Welcome"
import Request from "./HomeComp.Request/Request"
import Advantages from "./HomeComp.Advantages/Advantages"
import { Models } from "./HomeComp.BikeModels/BikeModels"
import ChooseUs from "./HomeComp.ChooseUs/ChooseUs"
import Reviews from "./HomeComp.Reviews/Reviews"
import Questions from "./HomeComp.Questions/Questions"
import Application from "./HomeComp.Application/Application"



export default function HomeComp() {

    return (
      <div id="home-page">
        <Welcome />
        <Request />
        <Advantages />
        <Models />
        <ChooseUs />
        <Reviews />
        <Questions />
        <Application />
      </div>
    );
}