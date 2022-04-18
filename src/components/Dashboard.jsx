import { Link } from "react-router-dom";
import MessageForm from "./MessageForm";

export default function Dashboard() {
  return (
    <div className="">
      <h1 className="text-center my-2 text-xl">Start a Conversation</h1>
      <MessageForm />
      <h1 className="text-center my-2 text-xl">Or Create a Channel</h1>
      <Link
        to="channels/new"
        className="bg-primary text-gray-50 rounded-md p-2 block mx-auto max-w-max"
      >
        Create New Channel
      </Link>
    </div>
  );
}
