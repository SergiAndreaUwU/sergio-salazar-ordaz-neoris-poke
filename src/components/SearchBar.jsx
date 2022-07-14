import styles from "./SearchBar.module.css";
import SearchIcon from "../icons/SearchIcon"

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
        <div className={styles.searchIcon}><SearchIcon/></div>
      <input type="text" className={styles.searchInput} placeholder="Buscar" />
    </div>
  );
};

export default SearchBar;
