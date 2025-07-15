import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const api = process.env.REACT_APP_BASE_URL;
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumPage() {
  const { id } = useParams();
  // 從路由表path取出id的值
  // console.log(useParams());
  // 可以查看內容
  // console.log(api, accessId);

  const [photoData, setPhoteData] = useState({});

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${api}/photos/${id}?client_id=${accessId}`);
      setPhoteData(res.data);
    })();
  }, [id]);

  console.log(photoData);
  return (
    <>
      <div>
        <ul className="list-unstyled">
          <li>圖片ID:{id}</li>
          <li>描述：{photoData.description}</li>
          <li>
            <img src={photoData.urls.small} alt={photoData.alt_description} />
          </li>
        </ul>
      </div>
    </>
  );
}
