import React from "react";
import "./TeslaBattery.css";
import TeslaNotice from "../TeslaNotice/TeslaNotice";
import TeslaCar from "../TeslaCar/TeslaCar";
import TeslaStats from "../TeslaStats/TeslaStats";

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19,
      },
    };
  }
  render() {
    const { config, carstats } = this.state;
    return (
      <form className="tesla-battery">
        <h1>Range per Charge</h1>
        <TeslaCar wheelsize={config.wheels} />
        <TeslaStats carstats={carstats} />
        <TeslaNotice />
      </form>
    );
  }
}
export default TeslaBattery;
