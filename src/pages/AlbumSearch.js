import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const api = process.env.REACT_APP_BASE_URL;
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumSearch() {
  const [search, setSearch] = useState("animal");
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${api}/search/photos?client_id=${accessId}&query=${search}`
      );
      setPhotos(res.data.results);
    })();
  }, [search]);

  return (
    <div>
      <h3>請輸入關鍵字</h3>
      <input
        type="text"
        className="form-control"
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            setSearch(e.target.value);
          }
        }}
      />
      <ol>
        {photos.map((item) => {
          return (
            <li key={item.id} className="mb-1">
              <Link to={item.id}>{item.id}</Link>
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
