import "./search-box.style.css";

const SearchBox = ({ changeHandler, className, placeholder }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBox;
