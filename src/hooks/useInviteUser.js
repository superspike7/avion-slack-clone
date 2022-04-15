import { useMutation, useQueryClient } from "react-query";
import * as API from "../api";

export default function useInviteUser(id) {
  const queryClient = useQueryClient();
  return useMutation(API.inviteUser, {
    onSettled: () => {
      queryClient.invalidateQueries("details", `${id}`);
    },
  });
}
