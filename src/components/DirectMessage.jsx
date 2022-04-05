import { useParams } from "react-router-dom";

export default function DirectMessage() {
  const params = useParams();
  return (
    <div>
      <p>{params.id}</p>
      <h1>Direct Message</h1>
    </div>
  );
}
