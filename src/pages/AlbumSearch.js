import { useState } from "react";

export default function AlbumSearch() {
  const [search, setSearch] = useState("");

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
