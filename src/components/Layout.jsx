import axios from "axios";
import { useQuery } from "react-query";
import { getStoredUser } from "../storage/user";

const URL = "http://206.189.91.54/api/v1";

export default function Layout() {
  const { data, isLoading, isError, error } = useQuery("channels", () => {
    return axios.get(`${URL}/users`, {
      headers: {
        ...getStoredUser().headers,
      },
    });
  });

  if (isLoading) return <h1>Fetching Channels...</h1>;

  return (
    <div className="container mx-auto flex flex-col justify-center">
      <h1 className="text-center">Channels</h1>
      {isError ? <div>error! {error.message}</div> : null}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
