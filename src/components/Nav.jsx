import { Link } from "react-router-dom";
import useChannels from "../hooks/useChannels";

export default function Nav() {
  const { data: channels } = useChannels();

  return (
    <div className="bg-primary p-2">
      <h1 className="text-center text-gray-50 text-xl font-semibold mb-8
                     border-y-[0.1px] border-y-fuchsia-200 py-2 border-opacity-10">
        Avion School
      </h1>
      <div className="px-4 text-gray-50 mb-8">
        <div className="flex justify-between">
          <h3>Channels</h3>
          <Link
            to="/channels/new"
            className="hover:bg-gray-100 hover:text-gray-900 px-2 rounded-full"
          >
            +
          </Link>
        </div>
        <ul className="w-10/12 mx-auto">
          {!!channels?.errors ? <p>{channels?.errors}</p> : null}
          {channels?.data?.map((channel) => {
            return (
              <Link
                key={channel.id}
                className="hover:bg-gray-800 cursor-pointer w-full block"
                to={`/channels/${channel.id}`}
              >
                {channel.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="px-4 text-gray-50">
        <div className="flex justify-between">
          <h3>Messages</h3>
          <Link
            to="/messages/new"
            className="hover:bg-gray-100 hover:text-gray-900 px-2 rounded-full"
          >
            &#x1F50D;
          </Link>
        </div>
        <ul className="w-10/12 mx-auto">
          <Link
            to="/dm/69"
            className="hover:bg-gray-800 cursor-pointer w-full block"
          >
            Vinz
          </Link>
        </ul>
      </div>
    </div>
  );
}
