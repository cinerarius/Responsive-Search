import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const searchHandler = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div>
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className={"monsters-search-box"}
        placeholder={"Search Monster"}
        changeHandler={searchHandler}
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className={"monsters-search-box"}
//           placeholder={"Search Monster"}
//           changeHandler={this.searchHandler}
//         />
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;
