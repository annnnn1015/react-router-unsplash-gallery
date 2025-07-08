import { Outlet } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const api = "https://api.unsplash.com/search/photos";
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

console.log(api, accessId);

export default function Album() {
  const [list, setList] = useState([]);

  return (
    <div className="row">
      <div className="col">選單</div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
}
