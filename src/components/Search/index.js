import React from "react";
import styles from "./Search.module.scss";

export const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        placeholder="Search for characters"
        type="text"
        className={styles.input}
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={(e) => e.preventDefault()}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};
