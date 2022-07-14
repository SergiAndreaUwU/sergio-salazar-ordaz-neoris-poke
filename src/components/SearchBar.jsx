import styles from "./SearchBar.module.css";
import SearchIcon from "../icons/SearchIcon"

const SearchBar = ({value,setQuery}) =>(
    <div className={styles.searchContainer}>
        <div className={styles.searchIcon}><SearchIcon/></div>

      <input
        type="text"
        className={styles.searchInput}
        value={value}
        onChange={event => setQuery(event.target.value)}
      />
    </div>
  );

export default SearchBar;
