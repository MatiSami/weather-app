import React, { Component } from "react";

const Result = (props) => {

  const isLoaded = props.loaded;
  console.log(isLoaded)

  if (isLoaded){
      return (
    <>
      <div className="App">
        {props.city} 
        {props.temp}
        {"\u00b0"}
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt=""
        />
      </div>
      ;
    </>
  );
  } else {
    return (
      <div> Wpisz miasto</div>
    )
  }
};

export default Result;
