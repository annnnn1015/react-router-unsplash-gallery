import { useOutletContext } from "react-router-dom";
import List from "../components/List";

export default function AlbumIndex() {
  const list = useOutletContext();
  console.log("AlbumIndex:", list);

  return (
    <div>
      <h1>相簿首頁</h1>
      <ul>
        <List list={list} />
      </ul>
    </div>
  );
}
