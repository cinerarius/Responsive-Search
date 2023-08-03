import { Component } from "react";
import "./search-box.style.css";

class SearchBox extends Component {
  render() {
    const { changeHandler } = this.props;
    return (
      <div className="flex items-center justify-center">
        <input
          type="text"
          className={`search-box ${this.props.className}`}
          placeholder={this.props.placeholder}
          onChange={changeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
