import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const api = process.env.REACT_APP_BASE_URL;
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  // 從路由表path取出id的值
  // console.log(useParams());
  // 可以查看內容
  // console.log(api, accessId);

  const [photoData, setPhotoData] = useState({});

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${api}/photos/${id}?client_id=${accessId}`);
      setPhotoData(res.data);
    })();
  }, [id]);

  console.log(photoData);
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary me-3"
          onClick={() => navigate(-1)}
        >
          -1 上一頁
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate(1)}
        >
          1 下一頁（需先回到上一頁才能按）
        </button>
        <ul className="list-unstyled">
          <li>圖片ID:{id}</li>
          <li>描述：{photoData.description}</li>
          <li>
            <img src={photoData?.urls?.small} alt={photoData.alt_description} />
          </li>
        </ul>
      </div>
    </>
  );
}
