import { Outlet } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

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
