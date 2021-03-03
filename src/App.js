// import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import CocktailsCard from "./component/CocktailsCard/CocktailsCard";
import Admin from "./component/Admin/Admin";
import Card from "./component/Card/Card";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cocktails" component={CocktailsCard} />
        <Route path="/cocktails/card/:id" component={Card} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
