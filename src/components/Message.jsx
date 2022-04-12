export default function Message({ message }) {
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="hover:bg-gray-300 py-2">
      <div className="flex px-5 gap-2">
        <div className="bg-blue-500 h-10 w-10"></div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 items-end">
            <p>{message.sender.email}</p>
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
