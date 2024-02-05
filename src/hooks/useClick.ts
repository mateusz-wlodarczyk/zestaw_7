import { useState } from "react";

export const useClick = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber((num) => num - 1);
    } else {
      return;
    }
  };
  const handleNextClick = () => {
    if (pageNumber < 6) {
      setPageNumber((num) => num + 1);
    } else {
      return;
    }
  };
  return { handlePrevClick, handleNextClick, pageNumber };
};
