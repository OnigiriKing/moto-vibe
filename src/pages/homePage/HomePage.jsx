import Welcome from "./components/Welcome"
import { Request } from "./components/Request"


export default function HomePage() {

    return (
        <div id="home-page">
        <Welcome />
        <Request />
        </div>
    )
}