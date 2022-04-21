import useUsers from "../hooks/useUsers";
import Select, { createFilter } from "react-select";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useChannelDetails from "../hooks/useChannelDetails";
import useInviteUser from "../hooks/useInviteUser";

export default function ChannelInvite() {
  const { id } = useParams();
  const { details } = useChannelDetails(id);
  const { userOptions, users } = useUsers();
  const [selected, setSelected] = useState({});
  const membersId = details.channel_members?.map((user) => user.user_id);
  const members = users?.filter((user) => membersId?.includes(user.id));
  const { mutate } = useInviteUser(id);

  const AVATAR = "https://avatars.dicebear.com/api/micah/";

  function handleSelect(opt) {
    setSelected(opt);
  }

  function handleInvite() {
    mutate({
      id: id,
      member_id: selected.value,
    }, {
      onSuccess: () => {
        setSelected({});
      },
    });
  }

  return (
    <div>
      <div className="px-5 py-4 font-bold text-lg border border-b-gray-300">
        Invite User:
      </div>
      <Select
        options={userOptions}
        onChange={(opt) => handleSelect(opt)}
        filterOption={createFilter({ ignoreAccents: false })}
      />
      <div className="px-5">
        <p>selected: {selected.label}</p>
      </div>
      <button
        onClick={handleInvite}
        className="bg-green-500 p-2 rounded-md ml-4 mt-2"
      >
        Invite user
      </button>

      <div className="mt-8 px-2">
        <p className="mb-2">members:</p>
        {members.map((user) => {
          return (
            <ul key={user.id}>
              <li className="flex gap-2">
                <div className="h-10 w-10 bg-primary bg-opacity-20 rounded-md">
                  <img src={`${AVATAR}avion-${user.email}.svg`} />
                </div>
                <p>{user.email}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
