import useUsers from "../hooks/useUsers";
import Select, { createFilter } from "react-select";
import { useNavigate } from "react-router-dom";

export default function MessageForm() {
  const { userOptions } = useUsers();
  const navigate = useNavigate();

  function handleSelect({ value: id }) {
    navigate(`/dm/${id}`);
  }
  return (
    <div>
      <div className="px-5 py-4 font-bold text-lg border border-b-gray-300">
        Search User:
      </div>
      <Select
        options={userOptions}
        onChange={(opt) => handleSelect(opt)}
        filterOption={createFilter({ ignoreAccents: false })}
      />
    </div>
  );
}
