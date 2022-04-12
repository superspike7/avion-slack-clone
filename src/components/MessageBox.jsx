import { MdSend } from "react-icons/md";

export default function MessageBox() {
  return (
    <div className="border-slate-900 h-36 pb-7 px-5">
      <form className="border border-opacity-50 rounded-lg border-gray-500 h-full w-full">
        <div className="bg-gray-100 rounded-t-lg h-[30%] w-full"></div>
        <div className="text-box w-full">
          <input
            className="focus:outline-none w-full bg-gray-50 px-5 my-3"
            type="text"
            placeholder="Message Channel name"
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
