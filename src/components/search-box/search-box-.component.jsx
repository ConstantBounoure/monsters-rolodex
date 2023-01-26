import { Component } from "react";

import "./search-box.styles.css";

class SearchBox extends Component {
    constructor() {
        super();
    }

    render() {
        const { onChangeHandler, placeholder, className } = this.props;

        return (
            <input
                type="search"
                className={`search-box ${className}`}
                placeholder={placeholder}
                onChange={onChangeHandler}
            ></input>
        );
    }
}

export default SearchBox;
