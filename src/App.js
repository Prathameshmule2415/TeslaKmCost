import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import TeslaBattery from "./component/Container/TeslaBattery";

function App() {
  return (
    <React.Fragment>
      <Header />
      <TeslaBattery>
        {/*  <TeslaCar />
        <TeslaStats />
        <TeslaCounter />
        <TeslaClimate />
        <TeslaWheels />
        <TeslaNotice />*/}
      </TeslaBattery>
    </React.Fragment>
  );
}

export default App;
