import Circles from "./Circles";
import "./WeatherApp.css";
import WeatherInfo from "./WeatherInfo";
import Search from "./Search";
import { useState } from "react";

export default function WeatherApp() {
  let [info, setInfo] = useState({
    name: "Mumbai",
    country: "IN",
    lat: 19.0144,
    lon: 72.8479,
    sunrise: 1753404176,
    sunset: 1753451221,
    feels_like: 26.29,
    humidity: 91,
    temp: 26.29,
    temp_max: 26.29,
    temp_min: 26.29,
    windSpeed: 9.05,
    pressure: 995,
    type: "Rain",
    description: "light rain",
  });

  const bgImage = (() => {
    if (info.type === "Rain") {
      return 'url("https://images.unsplash.com/photo-1585160214005-23a90c0314f6?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    } else if (info.type === "Snow") {
      return 'url("https://images.pexels.com/photos/813871/pexels-photo-813871.jpeg")';
    } else if (info.type === "Thunderstorm") {
      return 'url("https://images.pexels.com/photos/21050936/pexels-photo-21050936.jpeg")';
    } else if (info.temp > 30) {
      return 'url("https://images.pexels.com/photos/196663/pexels-photo-196663.jpeg")';
    } else if (info.temp > 20) {
      return 'url("https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg")';
    } else if (info.temp > 10) {
      return 'url("https://images.pexels.com/photos/1525042/pexels-photo-1525042.jpeg")';
    } else {
      return 'url("https://images.pexels.com/photos/3788183/pexels-photo-3788183.jpeg")';
    }
  })();

  const updateInfo = (newInfo) => {
    setInfo(newInfo);
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: bgImage,
      }}
    >
      {/* <Circles /> */}
      <div className="overlay"></div>
      <div className="content">
        <Search updateInfo={updateInfo} />
        <WeatherInfo weatherInfo={info} />
      </div>
    </div>
  );
}
