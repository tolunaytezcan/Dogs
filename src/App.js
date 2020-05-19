import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Homepage from "./containers/Homepage";
import FilteredDogs from "./containers/FilteredDogs";
import DetailDogs from "./containers/DetailDog";
import Aboutus from "./containers/Aboutus";
import Turler from "./containers/Turler";
import { Reactstrap } from "./components/Reactstrap";
class App extends React.Component {
  render() {
    return (
      <div className="App">

        {/**********Dogs redux ekleme ödevi**********/}

        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about-us" exact component={Aboutus} />
          <Route path="/tur" exact component={Turler} />
          <Route path="/tur/:yazilanTur" exact component={FilteredDogs} />
          <Route path="/detay/:id/:name" exact component={DetailDogs} />
          <Route
            component={() => (
              <div>
                <h1>404 sayfa bulununamadi</h1>
              </div>
            )}
          />
        </Switch>
        {/*
         */}

        {/**********Reactstrap form ödevi**********/}

        {/*
                <Reactstrap/>
        */}
      </div>
    );
  }
}

export default App;
