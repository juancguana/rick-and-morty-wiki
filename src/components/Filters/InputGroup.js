import React from "react";

export const InputGroup = ({ setId, total, name }) => {
  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        id={name}
        onChange={(e) => setId(e.target.value)}
      >
        <option value={1}>Choose...</option>
        {[...Array(total).keys()].map((item) => {
          return (
            <option key={`option-${item}`} value={item + 1}>
              {name} - {item + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};
