import images from "../../assets/icons/index";
import "./styles.css";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
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
