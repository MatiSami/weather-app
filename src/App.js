import React, { Component } from "react";
import "./App.css";
import Form from "./form/form.js";
import Result from "./result/result.js";

// API URL http://api.openweathermap.org/data/2.5/weather?q=Warszawa&units=metric&APPID=52a3e708b556505a9c6398156d4c927d
const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
// const CITY = 'Warszawa';
const UNITS = "metric";
const API_ID = "52a3e708b556505a9c6398156d4c927d";

// const URL = API_URL + CITY + "&units=" + UNITS + "&APPID=" + API_ID;

class App extends Component {
  state = {
    value: "",
    error: null,
    isLoaded: false,
    temperature: '',
    icon: '',
    units: '',
    city: ''
  };

  handleChange = (e) =>{
    this.setState({ 
      value: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      city: this.state.value,
    })

    const URL = API_URL + this.state.value + "&units=" + UNITS + "&APPID=" + API_ID;

    fetch(URL)
    .then((res) => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          temperature: result.main.temp,
          icon: result.weather[0].icon
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    return (
      <>
        <Form
          value={this.state.value}
          change={this.handleChange}
          submit={this.handleSubmit}
        ></Form>
        <Result icon={this.state.icon} temp={this.state.temperature } city={this.state.city} loaded={this.state.isLoaded}></Result>
      </>
    );
  }
}

export default App;
