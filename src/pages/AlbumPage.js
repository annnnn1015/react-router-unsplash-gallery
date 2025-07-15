import { useParams } from "react-router-dom";

export default function AlbumPage() {
  const { id } = useParams();
  // 從路由表path取出id的值

  console.log(useParams());
  // 可以查看內容

  return (
    <>
      <div>圖片ID:{id}</div>
    </>
  );
}
