import useUsers from "./useUsers";
import * as API from "../api";
import { useQuery } from "react-query";

export default function useDirectMessages() {
  const { users } = useUsers();
}
