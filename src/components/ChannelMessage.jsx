import { useParams } from "react-router-dom";
import Messages from "./Messages";
import MessageBox from "./MessageBox";
import useMessages from "../hooks/useMessages";
import useChannelDetails from "../hooks/useChannelDetails";

export default function ChannelMessage() {
  const { id } = useParams();
  const { details } = useChannelDetails(id);
  const { messages } = useMessages(id, "Channel");

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="w-full px-5 py-3 h-18 border border-b-gray-500 flex justify-between">
        <h1 className="font-bold text-lg tracking-tight">{details.name}</h1>
        <p>Channel No: {id}</p>
      </div>
      <Messages messages={messages} />
      <MessageBox id={id} type="Channel" />
    </div>
  );
}
