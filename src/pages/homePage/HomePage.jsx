import Welcome from "./components/Welcome"
import { Request } from "./components/Request"
import Advantages from "./components/Advantages"


export default function HomePage() {

    return (
        <div id="home-page">
        <Welcome />
        <Request />
        <Advantages />
        </div>
    )
}