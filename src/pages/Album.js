import { Outlet } from "react-router-dom";
export default function Album() {
  return (
    <div className="row">
      <div className="col">選單</div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
}
