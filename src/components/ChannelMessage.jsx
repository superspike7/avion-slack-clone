import { Link, useParams } from "react-router-dom";
import Messages from "./Messages";
import MessageBox from "./MessageBox";
import useMessages from "../hooks/useMessages";
import useChannelDetails from "../hooks/useChannelDetails";
import { BiChevronDown } from "react-icons/bi";

export default function ChannelMessage() {
  const { id } = useParams();
  const { details } = useChannelDetails(id);
  const { messages } = useMessages(id, "Channel");

  return (
    <div className="flex flex-col justify-between h-[95%] sm:h-screen">
      <div className="w-full px-5 py-3 h-18 border border-b-gray-500 flex justify-between">
        <Link
          to="invite"
          className="font-bold flex items-center text-lg tracking-tight p-2 hover:bg-gray-200 rounded-md"
        >
          {details.name} <BiChevronDown />
        </Link>
        <div className="flex items-center">
          <p>Channel No: {id}</p>
        </div>
      </div>
      <Messages messages={messages} />
      <MessageBox id={id} type="Channel" />
    </div>
  );
}
