import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  searchHandler = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const filteredMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div>
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className={"monsters-search-box"}
          placeholder={"Search Monster"}
          changeHandler={this.searchHandler}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
