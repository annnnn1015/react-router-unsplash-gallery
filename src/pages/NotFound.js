import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <p className="fs-1 m-5 text-danger">無此頁面，將自動跳回首頁</p>
    </div>
  );
}
