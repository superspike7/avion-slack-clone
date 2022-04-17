import { useMutation, useQueryClient } from "react-query";
import * as API from "../api";

export default function useCreateChannel() {
  const queryClient = useQueryClient();
  return useMutation(API.createChannel, {
    onSettled: () => {
      queryClient.invalidateQueries("channels");
    },
  });
}
