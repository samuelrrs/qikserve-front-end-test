import "./styles.css";
import images from "../../assets/icons/index.ts";

const SearchInput = () => {
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
      />
    </div>
  );
};

export default SearchInput;
