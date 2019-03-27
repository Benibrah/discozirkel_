import React from 'react';
import './App.css';
import ClubList from "./components/clublist/ClubList";
import SearchBar from "./components/searchbar/SearchBar";

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <h1>DiskoZirkel</h1>
            <SearchBar/>
            <ClubList/>
        </div>
    );
  }
}

export default App;
