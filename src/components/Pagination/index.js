import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      previousLabel="Prev"
      nextLabel="Next"
      previousClassName="btn btn-primary fs-5"
      nextClassName="btn btn-primary fs-5"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      pageCount={info?.pages || 1}
      onPageChange={({ selected }) => setPageNumber(selected + 1)}
      nextLinkClassName="text-white"
      previousLinkClassName="text-white"
    />
  );
};
