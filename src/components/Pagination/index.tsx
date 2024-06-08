import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { SetURLSearchParams } from "react-router-dom";

type PaginationProps = {
  currentPage: number;
  setSearchParams: SetURLSearchParams;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setSearchParams,
}) => {
  const handleChangePage = (e: { selected: number }) => {
    setSearchParams(
      (prev: URLSearchParams) => {
        prev.set("currentPage", String(e.selected + 1));
        return prev;
      },
      { replace: true }
    );
  };
  return (
    <ReactPaginate
      className={styles.root}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      pageCount={3}
      onPageChange={handleChangePage}
      forcePage={currentPage - 1} //и без этого работало
    />
  );
};

export default Pagination;
