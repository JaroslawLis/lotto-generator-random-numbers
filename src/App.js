import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Tickets from "./components/Tickets";
const settings = {
  price: 1.25,
  total: 10
};

class App extends Component {
  state = {
    tableOfResult: []
  };

  handleDrawingButton = () => {
    let amountOfCoupons = Math.floor(settings.total / settings.price);
    let tableOfResult = [];
    for (let i = 0; i < amountOfCoupons; i++) {
      let z = this.drawing();
      tableOfResult.push(z);
    }
    this.setState({
      tableOfResult
    });
  };

  drawing = () => {
    let result = [];

    function wynikLosowania() {
      return Math.floor(Math.random() * 42 + 1);
    }
    while (result.length < 5) {
      let oneDraw = wynikLosowania();
      if (oneDraw !== result.find(el => el === oneDraw)) {
        result.push(oneDraw);
      }
    }
    return result;
  };

  render() {
    return (
      <>
        <Header budget={settings.total} lotteryTicket={settings.price} />
        <NavBar click={this.handleDrawingButton} />

        <Tickets coupons={this.state.tableOfResult} />
      </>
    );
  }
}

export default App;
