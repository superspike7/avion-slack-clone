import { useMutation, useQueryClient } from "react-query";
import * as API from "../api";

export default function useCreateMessage(id) {
  const queryClient = useQueryClient();
  return useMutation(API.createMessage, {
    onSettled: () => {
      queryClient.invalidateQueries("messages", `${id}`);
    },
  });
}
