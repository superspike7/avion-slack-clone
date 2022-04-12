import { useMutation } from "react-query";
import * as API from "../api";

export default function useCreateChannel() {
  return useMutation(API.createChannel);
}
