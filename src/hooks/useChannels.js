import { useQuery } from "react-query";
import * as API from "../api";

export default function useChannels() {
  return useQuery("channels", API.fetchChannels);
}
