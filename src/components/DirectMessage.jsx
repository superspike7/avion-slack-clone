import { useParams } from "react-router-dom";
import Messages from "./Messages";
import MessageBox from "./MessageBox";
import useMessages from "../hooks/useMessages";
import useUsers from "../hooks/useUsers";

export default function DirectMessage() {
  const { id } = useParams();
  const { messages } = useMessages(id, "User");
  const { users } = useUsers();
  const currentUser = users.find((user) => user.id == id);

  return (
    <div className="flex flex-col justify-between h-[95%] sm:h-screen">
      <div className="w-full px-5 py-3 h-18 border border-b-gray-500 flex justify-between">
        <h1 className="font-bold text-lg tracking-tight">
          {currentUser?.email}
        </h1>
        <p>User No: {id}</p>
      </div>
      <Messages messages={messages} />
      <MessageBox id={id} type="User" />
    </div>
  );
}
