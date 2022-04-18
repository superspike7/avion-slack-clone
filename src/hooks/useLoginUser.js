import { useMutation } from "react-query";
import * as API from "../api";
import { setStoredUser } from "../storage/user";

export default function useLoginUser() {
  return useMutation(API.loginUser, {
    onSuccess: (data) => {
      setStoredUser({
        ...data.data,
        headers: data.headers,
      });
    },
  });
}
