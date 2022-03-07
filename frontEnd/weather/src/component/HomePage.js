import React from "react";
import { useHistory } from "react-router-dom";
export const Home = () => {
  const history = useHistory();
  const seeTheWeather = () => {
    history.push("/weather");
  };
  return (
    <div class="home">
      <div class="homeText">
        <h2 class="h2_Home">
          Welcome To <br />
          Your Weather
        </h2>
        <p class="pHome">
          “ You are the sky . . . Everything else - it's just the weather ”
        </p>
        <button class="button" onClick={seeTheWeather}>
          {" "}
          See The Weather{" "}
        </button>
      </div>
    </div>
  );
};
