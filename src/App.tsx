import React, { FC } from "react";
import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { RootState } from "./redux/configStore";
import { useAppDispatch, useAppSelect } from "./redux/configStore";
import { getWeather } from "./redux/modules/weather";
const App: FC = () => {
  const wearherData = useAppSelect(getWeather);
  return (
    <div className="App">
      <Search title="title"></Search>
      {wearherData !== null && <Weather data={wearherData}></Weather>}
    </div>
  );
};

export default App;
