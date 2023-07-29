import { homeSvg } from "../../../svg/homeSvg";

export default function Welcome() {
  return (
    <div className="welcome-screen">
      {homeSvg()}
      <div></div>
      <div></div>
    </div>
  );
}
