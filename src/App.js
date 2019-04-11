import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const settings = {
  price: 1.25,
  total: 10
};

const Header = () => <h4> Generator Lotto </h4>;
const Budget = () => (
  <div>
    {" "}
    Twój budżet wynosi: {settings.total}
    złotych{" "}
  </div>
);
const DrawingButton = () => (
  <button onClick={this.handleDrawingButton}> Losowanie </button>
);
const Zaklad = props => {
  console.log(props);
  const liczby = [...props.zaklad];
  console.log(liczby);

  if (liczby.length) {
    let arr = [];
    for (let i = 1; i < 50; i++) {
      let match = liczby.find(el => el === i);
      let div =
        i === match ? (
          <div key={i} className="full_number">
            {i}
          </div>
        ) : (
          <div key={i}>{i}</div>
        );
      arr.push(div);
    }

    return <div className="pojedynczy_zaklad">{arr}</div>;
  } else {
    return null;
  }
};

const Zaklady = props => {
  const liczby = [...props.zaklady];
  console.log(liczby.length);
  if (liczby.length) {
    let table = liczby.map(liczba => <Zaklad zaklad={liczba} />);
    console.log(table);
    return <div className="main_table">{table}</div>;
  } else {
    return null;
  }
};

class App extends Component {
  state = {
    tableOfResult: []
  };
  handleDrawingButton = () => {
    let iloscZakladow = Math.floor(settings.total / settings.price);
    let tableOfResult = [];
    for (let i = 0; i < iloscZakladow; i++) {
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
        <Header />
        <Budget />
        <button onClick={this.handleDrawingButton}> Losowanie </button>
        <Zaklady zaklady={this.state.tableOfResult} />
      </>
    );
  }
}

export default App;
