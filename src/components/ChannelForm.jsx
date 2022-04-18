import { useState } from "react";
import Select, { createFilter } from "react-select";
import ErrorMessage from "./ErrorMessage";
import useCreateChannel from "../hooks/useCreateChannel";
import useUsers from "../hooks/useUsers";
import { getStoredUser } from "../storage/user";
import { useNavigate } from "react-router-dom";

export default function ChannelForm() {
  const navigate = useNavigate();
  const currentUser = getStoredUser();
  const [userIds, setUserIds] = useState([currentUser.data.id]);
  const [title, setTitle] = useState("");

  const { users, userOptions } = useUsers();

  const {
    isLoading,
    mutate,
    isSuccess,
    isError,
    error,
    data: mutationData,
  } = useCreateChannel();

  const selectedUsers = users.filter((user) => {
    return userIds.includes(user.id);
  });

  const handleSelect = (opt) => {
    setUserIds([
      ...userIds,
      opt.value,
    ]);
  };

  const handleCancel = (id) => {
    setUserIds(
      userIds.filter((userId) => userId !== id),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: title,
      user_ids: userIds,
    };
    mutate(data, {
      onSuccess: ({ data }) => {
        if (data) return navigate(`/channels/${data.id}`);
      },
    });
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="w-full h-full grid place-items-center mx-auto">
      <form
        className="w-5/12 rounded-lg shadow-xl p-4 bg-gray-100"
        onSubmit={handleSubmit}
      >
        {isSuccess ? <div>Channel Successfully Created!</div> : null}
        {isError ? <ErrorMessage errors={error} /> : null}
        <h1 className="text-center text-2xl font-bold ">
          Create New Channel
        </h1>

        <div className="flex flex-col h-full py-2 gap-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg">Channel Name:</label>
            <input
              className="text-lg p-2 border border-gray-500 rounded-[3px]"
              type="text"
              placeholder="cool channel name"
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg">Add A User:</label>
            <Select
              options={userOptions}
              onChange={(opt) => handleSelect(opt)}
              filterOption={createFilter({ ignoreAccents: false })}
            />
          </div>

          <div className="flex-1">
            <h3 className="text-lg">Users:</h3>
            <ul className="list-decimal p-2 flex flex-col gap-1 h-56 overflow-auto">
              {selectedUsers.map((user) => {
                return (
                  <li
                    className="flex justify-between rounded-md bg-fuchsia-900 px-2 text-gray-50 text-lg"
                    key={user.id}
                  >
                    <p>{user.email}</p>
                    <button type="button" onClick={() => handleCancel(user.id)}>
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            className="mt-8 w-full text-gray-50 p-2 bg-fuchsia-900 font-bold text-lg rounded-md"
            type="submit"
          >
            Create new Channel
          </button>
        </div>
      </form>
    </div>
  );
}
