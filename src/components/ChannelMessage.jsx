import { useParams } from "react-router-dom";
import Messages from "./Messages";
import MessageBox from "./MessageBox";

export default function ChannelMessage() {
  const { id } = useParams();
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="w-full px-5 py-3 h-18 border border-b-gray-500 flex justify-between">
        <h1 className="font-bold text-lg tracking-tight">Paro-Paro G</h1>
        <p>Channel No: {id}</p>
      </div>
      <Messages />
      <MessageBox />
    </div>
  );
}
