import { Link } from "react-router-dom";
import formatTime from "../helper/formatTime";

export default function Message({ message }) {
  const AVATAR = "https://avatars.dicebear.com/api/micah/";

  return (
    <div className="hover:bg-gray-300 py-2">
      <div className="flex px-5 gap-2">
        <div className="h-10 w-10 bg-primary bg-opacity-20 rounded-md">
          <img src={`${AVATAR}avion-${message.sender.email}.svg`} />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 items-end">
            <Link to={`/dm/${message.sender.id}`} className="font-bold">
              {message.sender.email}
            </Link>
            <span className="text-sm">{formatTime(message.created_at)}</span>
          </div>
          <p>
            {message.body}
          </p>
        </div>
      </div>
    </div>
  );
}
