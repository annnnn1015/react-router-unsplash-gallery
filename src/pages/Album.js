import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

console.log(api, accessId);

export default function Album() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${api}?client_id=${accessId}&query=animal`
      );
      // query=animal 意思是搜尋關鍵字為animal

      // 資料路徑：response.data.results
      // 解構response.data 取得results
      const { results } = response.data;
      // console.log(results);
      // 存入狀態
      setList(results);
    })();
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-4">
          <h1>選單</h1>
          <ul>
            {list.map((item) => {
              return <li>{item.id}</li>;
            })}
          </ul>
        </div>
        <div className="col-8">
          <Outlet context={list} />
        </div>
      </div>
    </div>
  );
}
