import React, { FC } from "react";
import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { RootState } from "./redux/configStore";
import { useAppDispatch, useAppSelect } from "./redux/configStore";
import { getWeather } from "./redux/modules/weather";
import LinearProgress from "@material-ui/core/LinearProgress";

const App: FC = () => {
  const weather = useAppSelect(getWeather);
  const weatherData = weather.data;
  const weatherLoading = weather.loading;
  return (
    <div className="App" style={{ maxWidth: "1024px", margin: "0 auto" }}>
      <Search title="간단한 날씨 웹어플리케이션"></Search>

      {weatherLoading ? (
        <LinearProgress style={{ width: "100%" }} />
      ) : (
        weatherData !== null && <Weather data={weatherData}></Weather>
      )}
    </div>
  );
};

export default App;
