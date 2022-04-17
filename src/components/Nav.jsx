import { Link, NavLink } from "react-router-dom";
import useChannels from "../hooks/useChannels";

export default function Nav() {
  const { data: channels } = useChannels();

  return (
    <div className="bg-primary">
      <Link
        to="/"
        className="text-center text-gray-50 text-xl font-semibold mb-8 block
                   border-y-[0.1px] border-y-fuchsia-200 py-2 border-opacity-10"
      >
        Avion School
      </Link>
      <div className="text-gray-50 mb-8">
        <div className="mx-4 flex justify-between">
          <h3>Channels</h3>
          <Link
            to="/channels/new"
            className="hover:bg-gray-100 hover:text-gray-900 px-2 rounded-full"
          >
            +
          </Link>
        </div>
        <ul className="indent-8">
          {!!channels?.errors ? <p>{channels?.errors}</p> : null}
          {channels?.data?.map((channel) => {
            return (
              <NavLink
                key={channel.id}
                className={({ isActive }) =>
                  [
                    "py-1 w-full block",
                    isActive
                      ? "bg-sky-700 hover:bg-sky-700 cursor-default"
                      : "hover:bg-gray-900/50 cursor-pointer",
                  ].filter(Boolean).join(" ")}
                to={`/channels/${channel.id}`}
              >
                {channel.name}
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className="px-6 text-gray-50">
        <div className="flex justify-between">
          <h3>Direct Messages</h3>
          <Link
            to="/messages/new"
            className="hover:bg-gray-100 hover:text-gray-900 px-2 rounded-full"
          >
            &#x1F50D;
          </Link>
        </div>
      </div>
    </div>
  );
}
