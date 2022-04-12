import { useEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import useCreateMessage from "../hooks/useCreateMessage";

export default function MessageBox({ id, type }) {
  const { mutate } = useCreateMessage(id);

  const [values, setValues] = useState({
    receiver_id: id,
    receiver_class: type,
    body: "",
  });

  useEffect(() => {
    setValues({ ...values, receiver_id: id });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    mutate(values);
    setValues({ ...values, body: "" });
  }
  return (
    <div className="border-slate-900 h-36 pb-7 px-5">
      <form
        className="border border-opacity-50 rounded-lg border-gray-500 h-full w-full"
        onSubmit={handleSubmit}
      >
        <div className="bg-gray-100 rounded-t-lg h-[30%] w-full"></div>
        <div className="text-box w-full">
          <input
            className="focus:outline-none w-full bg-gray-50 px-5 my-3"
            type="text"
            placeholder="Message Channel name"
            value={values.body}
            onChange={(e) => setValues({ ...values, body: e.target.value })}
          />
        </div>
        <div className="attatchments px-5 flex flex-row-reverse">
          <button className="rounded-md px-2 py-1 bg-green-700">
            <MdSend className="fill-white text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
}
