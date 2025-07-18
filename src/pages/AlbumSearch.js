import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const api = process.env.REACT_APP_BASE_URL;
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumSearch() {
  const [search, setSearch] = useState(""); // 發API用的關鍵字
  const [inputValue, setInputValue] = useState(""); // 輸入框顯示的關鍵字
  const [photos, setPhotos] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("query")); // 測試取得網址列query的值
  }, [search]);

  // 將query的值存入search以觸發請求
  useEffect(() => {
    const queryParam = searchParams.get("query") || ""; //　確保沒有query參數時不會變成null
    setSearch(queryParam); // 更新發API用的關鍵字
    setInputValue(queryParam); // 同時更新輸入框的關鍵字
  }, [searchParams]);

  useEffect(() => {
    if (search !== "") {
      (async () => {
        const res = await axios.get(
          `${api}/search/photos?client_id=${accessId}&query=${search}`
        );
        setPhotos(res?.data?.results);
      })();
    } else {
      setPhotos([]);
    }
  }, [search]);

  return (
    <div>
      <h3>請輸入關鍵字</h3>
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // 單純切換輸入框文字
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            // setSearch(e.target.value);
            setSearchParams({ query: e.target.value });
          }
        }}
      />
      <ol>
        {photos.map((item) => {
          return (
            <li key={item.id} className="mb-1">
              <Link to={`/album/${item.id}`}>{item.id}</Link>
              <img
                src={item.urls.thumb}
                alt={item.alt_description}
                className="ms-1"
                width={100}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
