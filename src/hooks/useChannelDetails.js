import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as API from "../api";

export default function useMessages(id, type) {
  const { data } = useQuery(
    ["details", `${id}`],
    () => API.fetchChannelDetails(id, type),
  );
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (data) {
      setDetails(data.data);
    }
  }, [data]);

  return { data, details };
}
