import React from "react";
import "./searchbar.css";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-fields">
                    <input placeholder="Suche Clubs"/>
                    <input placeholder="Wo?"/>
                </div>
                <div className="SearchBar-submit">
                    <a>Suchen!</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;