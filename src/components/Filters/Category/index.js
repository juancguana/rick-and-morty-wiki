import React from "react";
import { FilterButton } from "../FilterButton";

const Category = ({ name, options, setFilter, setPageNumber }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${name}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${name}`}
          aria-expanded="false"
          aria-controls={`collapse-${name}`}
        >
          {name}
        </button>
      </h2>
      <div
        id={`collapse-${name}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${name}`}
      >
        <div className="accordion-body d-flex flex-wrap gap-2 p-2">
          {options.map((option, index) => (
            <FilterButton
              key={index}
              name={name}
              option={option}
              index={`${option}-${index}`}
              setPageNumber={setPageNumber}
              setFilter={setFilter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
