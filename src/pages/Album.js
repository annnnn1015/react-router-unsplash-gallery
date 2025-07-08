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
      console.log(response);
    })();
  }, []);

  return (
    <div className="row">
      <div className="col">選單</div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
}
