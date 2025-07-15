import { useOutletContext } from "react-router-dom";
export default function AlbumIndex() {
  const list = useOutletContext();
  console.log("AlbumIndex:", list);

  return (
    <div>
      <h1>相簿首頁</h1>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.id}</li>;
        })}
      </ul>
    </div>
  );
}
