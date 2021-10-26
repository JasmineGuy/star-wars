import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Film from "./components/Film/Film";
import Characters from "./components/Characters/Characters";
import FilmDetail from "./components/FilmDetail/FilmDetail";
import Nav from "./components/Nav/Nav";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films" component={Film} />
        <Route path="/characters/:id" component={CharacterDetail} />
        <Route path="/characters" component={Characters} />

        <Route path="/film-detail/:id" component={FilmDetail} />
      </Switch>
    </div>
  );
}

export default App;
