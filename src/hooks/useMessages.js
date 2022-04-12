import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as API from "../api";

export default function useMessages(id, type) {
  const { data } = useQuery(["messages", `${id}`], () =>
    API.fetchMessages(id, type)
  );
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (data) {
      setMessages(data.data);
    }
  }, [data]);

  return { data, messages };
}
