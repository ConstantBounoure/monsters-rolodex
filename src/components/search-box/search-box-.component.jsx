import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
    return (
        <input
            type="search"
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
        ></input>
    );
};

// class SearchBox extends Component {
//     constructor() {
//         super();
//     }

//     render() {
//         const { onChangeHandler, placeholder, className } = this.props;

//         return (
//             <input
//                 type="search"
//                 className={`search-box ${className}`}
//                 placeholder={placeholder}
//                 onChange={onChangeHandler}
//             ></input>
//         );
//     }
// }

export default SearchBox;
