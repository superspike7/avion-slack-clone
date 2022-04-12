import Message from "./Message";

export default function Messages({ messages }) {
  return (
    <div className="min-h-0 flex-1 overflow-y-scroll">
      {messages?.map((message, idx) => {
        return <Message key={idx} message={message} />;
      })}
    </div>
  );
}
