import { useParams } from "react-router-dom";

export default function ChannelMessage() {
  const params = useParams();
  return (
    <div>
      <p>{params.id}</p>
      <h1>Channel Message</h1>
    </div>
  );
}
