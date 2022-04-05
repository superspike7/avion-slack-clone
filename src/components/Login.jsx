import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import { setStoredUser } from "../storage/user";

const URL = "http://206.189.91.54/api/v1";

export default function Login() {
  const { isLoading, isError, mutate, error, isSuccess } = useMutation(
    async (user) => {
      const response = await axios.post(`${URL}/auth/sign_in`, user);
      const userData = { ...response.data, headers: response.headers };
      console.log("response", userData);
      setStoredUser(userData);
      return response;
    },
  );

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { value, id } = e.target;
    setValues((values) => ({
      ...values,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    mutate(values);
  }

  if (isLoading) return <h1>Logging in User...</h1>;

  return (
    <div className="container h-screen mx-auto">
      <form className="my-10 mx-auto w-1/4" onSubmit={handleSubmit}>
        {isError ? <div>error! {error.message}</div> : null}
        {isSuccess ? <div>User is now Logged In!</div> : null}
        <h1 className="text-4xl font-bold text-center mb-16">Login</h1>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg">Email:</label>
          <input
            className="text-lg p-2 border border-gray-500 rounded-[3px]"
            type="email"
            placeholder="email@work-email.com"
            value={values.email}
            onChange={handleChange}
            id="email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg">Password:</label>
          <input
            className="text-lg p-2 border border-gray-500 rounded-[3px]"
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
          />
        </div>

        <button
          className="mt-8 w-full text-gray-50 p-2 bg-fuchsia-900 font-bold text-lg rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
