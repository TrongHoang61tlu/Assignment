import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getProfile } from "../../services/Api";
import Pagination from "../../share/constans/pagination";

function RandomPage() {
  const [parent, setParent] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useParams();
  const id = params.id;
  const page = searchParams.get("page") || '1' ;

  const [pages, setPages] = useState({
    total: 100,
    results: 10,
    currentPage: page,
  });
  
  useEffect(() => {
    getProfile(id, {
      params: {
        name: id,
        results: 10,
        page: page,
      },
    }).then(({ data }) => {
      setParent(data);
      setPages({ ...pages, ...data.info.page});
    });
  }, [id, page]);

  return (
    <div>
      <div className="flex justify-center">
        <table className=" mt-2 table-fixed shadow-md shadow-blue-300 w-6/12 ">
          <thead className=" h-10 border bg-blue-400 ">
            <tr>
              <th>STT</th>
              <th>FullName</th>
              <th>UserName</th>
              <th>Thumbnail Icon</th>
            </tr>
          </thead>

          <tbody className="">
            {parent?.results?.map((res, index) => {
              return (
                <tr className=" border-2 mt-2">
                  <td className=" text-center">{index+1}</td>
                  <td className=" w-full text-center">
                    {`${res?.name?.title}. ${res.name.first} ${res?.name?.last}`}
                  </td>
                  <td className=" text-center">{res?.login?.username}</td>
                  <td className=" flex justify-center">
                    <img src={res?.picture?.thumbnail} />
                  </td>
                </tr>
              );
            })}
          </tbody>
            <h2 className=" font-semibold">Page {page}</h2>
        </table>
      </div>
      <div className=" flex justify-center">
        <Pagination pages = {pages} 
        />
      </div>
    </div>
  );
}

export default RandomPage;
