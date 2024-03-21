import images from "../../assets/icons/index";
import "./styles.css";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="search_input">
      <img
        src={images.searchIcon}
        alt="Search Icon"
        className="search_input__icon"
      />
      <input
        type="text"
        placeholder="Search menu items"
        className="menu__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
