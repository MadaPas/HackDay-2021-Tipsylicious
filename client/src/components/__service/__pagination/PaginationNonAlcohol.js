/* eslint-disable max-len */
import { useState } from 'react';

const PaginationNonAlcohol = currentState => {
  const { itemsPerPage, nonAlcohol, start } = currentState;
  const perPage = itemsPerPage || 8;
  const pages = Math.ceil(nonAlcohol.length / perPage);
  const pagination = [];
  const [currentPage, setCurrentPage] = useState(start <= pages ? start : 1);
  const [nonAlcoholPag, setNonAlcoholPag] = useState([...nonAlcohol].slice((currentPage - 1) * perPage, currentPage * perPage));

  let left = false;
  let right = false;
  for (let i = 1; i <= pages; i++) {
    if (i === currentPage) {
      pagination.push(
        { id: i, current: true, ellipsis: false },
      );
    } else if (i < 2 || i > pages - 1 || i === currentPage - 1 || i === currentPage + 1) {
      pagination.push(
        { id: i, current: false, ellipsis: false },
      );
    } else if (i > 1 && i < currentPage && !left) {
      pagination.push(
        { id: i, current: false, ellipsis: true },
      );
      left = true;
    } else if (i < pages && i > currentPage && !right) {
      pagination.push(
        { id: i, current: false, ellipsis: true },
      );
      right = true;
    }
  }

  const previousPage = e => {
    e.preventDefault();
    setCurrentPage(prevVal => (prevVal - 1 === 0 ? prevVal : prevVal - 1));
    if (currentPage !== 1) {
      setNonAlcoholPag([...nonAlcohol].slice((currentPage - 2) * perPage, (currentPage - 1) * perPage));
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const nextPage = e => {
    e.preventDefault();
    setCurrentPage(prevVal => (prevVal === pages ? prevVal : prevVal + 1));
    if (currentPage !== pages) {
      setNonAlcoholPag([...nonAlcohol].slice(currentPage * perPage, (currentPage + 1) * perPage));
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const changer = (page, e) => {
    e.preventDefault();
    if (page !== currentPage) {
      setCurrentPage(page);
      setNonAlcoholPag([...nonAlcohol].slice((page - 1) * perPage, page * perPage));
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return {
    prev: previousPage,
    next: nextPage,
    nonAlcoholPag,
    pagination,
    currentPage,
    changer,
  };
};

export default PaginationNonAlcohol;
