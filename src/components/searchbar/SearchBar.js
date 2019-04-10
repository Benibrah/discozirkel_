import React from "react";
import "./searchbar.css";
import {connect} from "react-redux";

let inputField = <input placeholder="Suche Clubs"/>;
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-fields">
                    <input placeholder="Suche Clubs"/>
                    <input placeholder="Wo?"/>
                </div>
                <div className="SearchBar-submit" onClick={this.handleClick}>
                    <a>Suchen!</a>
                </div>
            </div>
        )
    }

    handleClick() {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(null, mapDispatchToProps)(SearchBar)