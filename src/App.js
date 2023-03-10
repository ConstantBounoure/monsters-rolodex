// import { Component } from "react";
import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box-.component";

import "./App.css";

const App = () => {
    const [searchField, setSearchField] = useState("");
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((monstersFromResponse) => setMonsters(monstersFromResponse));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField)
        );
        setFilteredMonsters(newFilteredMonsters);
    }, [searchField, monsters]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder="search monsters"
                className="monsters-search-box"
            />

            <CardList monsters={filteredMonsters} />
        </div>
    );
};

// APPROCHE CLASS COMPONENT

// class App extends Component {
//     constructor() {
//         super();

//         this.state = {
//             monsters: [],
//             searchField: "",
//         };
//     }

//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((users) =>
//                 this.setState(
//                     () => {
//                         return { monsters: users };
//                     },
//                 )
//             );
//     }

//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLowerCase();
//         this.setState(() => {
//             return { searchField };
//         });
//     };

//     render() {
//         // get component assets
//         const { monsters, searchField } = this.state;
//         const { onSearchChange } = this;

//         const filteredMonsters = monsters.filter((monster) =>
//             monster.name.toLowerCase().includes(searchField)
//         );

//         return (
//             <div className="App">
//                 <h1 className="app-title">Monsters Rolodex</h1>
//                 <SearchBox
//                   onChangeHandler={onSearchChange}
//                   placeholder="search monsters"
//                   className="monsters-search-box"
//                 />;
//                 <CardList monsters={filteredMonsters} />
//             </div>
//         );
//     }
// }

export default App;
