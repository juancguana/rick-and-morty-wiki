import React from "react";

export const FilterButton = ({
  name,
  option,
  index,
  setFilter,
  setPageNumber,
}) => {
  return (
    <div>
      <style jsx="true">
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={index}
          onClick={() => {
            setPageNumber(1);
            setFilter((filter) => ({
              ...filter,
              [name.toLowerCase()]: option,
            }));
          }}
        />
        <label className="btn btn-outline-primary" htmlFor={index}>
          {option}
        </label>
      </div>
    </div>
  );
};
