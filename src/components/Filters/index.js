import React from "react";
import { categories } from "../../constants";
import Category from "./Category";

export const Filters = ({ setFilter, setPageNumber }) => {
  const handleClear = () => {
    setFilter({ gender: "", species: "", status: "" });
    window.location.reload("false");
  };

  return (
    <aside className="col-3">
      <h3 className="text-center mb-4 ">Filter</h3>
      <h5
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline text-primary mb-4"
        onClick={handleClear}
      >
        Clear Filters
      </h5>
      <div className="accordion" id="accordionExample">
        {categories.map((category) => (
          <Category
            key={category.id}
            name={category.name}
            options={category.options}
            setFilter={setFilter}
            setPageNumber={setPageNumber}
          />
        ))}
      </div>
    </aside>
  );
};
