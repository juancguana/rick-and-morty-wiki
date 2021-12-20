import React from "react";

export const Pagination = ({ pageNumber, setPageNumber }) => {
  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber((page) => page - 1);
  };

  const handleNext = () => {
    setPageNumber((page) => page + 1);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button className="btn btn-primary" onClick={handlePrev}>
        Prev
      </button>
      <button className="btn btn-primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};
