import { useQuery } from "react-query";

const url = "http://206.189.91.54/api/v1/users";
const fetchUsers = async () => {
  const res = await fetch(url);
  return res.json();
};

export default function Users() {
  const { isLoading, data } = useQuery("users", fetchUsers);

  if (isLoading) return <p>Loading</p>;
  if (data.errors) return <p>{data.errors}</p>;

  // {data.map((user) => {
  //   return <li key={user.id}>{user.email}</li>;
  // })}
  console.log(data);
  return (
    <div>
      <li>tae</li>
    </div>
  );
}
