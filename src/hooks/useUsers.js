import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as API from "../api";

export default function useChannels() {
  const { data } = useQuery("users", API.fetchUsers);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  return { users };
}
