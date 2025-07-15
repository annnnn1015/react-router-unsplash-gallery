import axios from "axios";
import { useEffect, useState } from "react";

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
    </div>
  );
}
