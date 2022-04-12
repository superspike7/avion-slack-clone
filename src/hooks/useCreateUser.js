import { useMutation } from "react-query";
import * as API from "../api";

export default function useCreateUser() {
  return useMutation(API.registerUser);
}
