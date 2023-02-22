import { Link, useLocation, useSearchParams } from "react-router-dom";

function Pagination({ pages }) {
  const { pathname} = useLocation();
  const { total, results, currentPage } = pages;
  const totalPages = Math.ceil(total / results);

  const formatUrl = (page) => {
    return `${pathname}?&page=${page}`;
  };

  function renderPagesHTML(delta = 1) {
    const pagesHtml = [];
    const left = currentPage - delta;
    const right = currentPage + delta;
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === currentPage ||
        i === totalPages ||
        (i >= left && i <= right)
      ) {
        pagesHtml.push(i);
      }
    }
    return pagesHtml;
  }

  return (
    <>
     <ul className="mt-2 flex border ">
      {renderPagesHTML().map((page, index)=> (
        <li className=" p-2 border hover:bg-slate-200 active:bg-red-500">
          <Link to= {formatUrl(page)}>{page}</Link>
        </li>

      ))}

      </ul>
    </>
  );
}

export default Pagination;
