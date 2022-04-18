import { useState } from "react";
import { Link } from "react-router-dom";
import useCreateUser from "../hooks/useCreateUser";
import ErrorMessage from "./ErrorMessage";

export default function Register() {
  const { error, isError, isSuccess, isLoading, mutate } = useCreateUser();

  const [values, setValues] = useState({
    email: "",
    password: "",
    password_confirmation: "",
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

  if (isLoading) return <h1>Registering User...</h1>;

  return (
    <div className="container h-screen mx-auto grid place-items-center">
      <form className="my-10 mx-auto sm:w-1/4" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold text-center ">Register</h1>
        {isSuccess ? <div>User is now Registered!</div> : null}
        {isError
          ? (
            <ErrorMessage
              errors={error.response.data.errors.full_messages}
            />
          )
          : null}

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

        <div className="flex flex-col">
          <label htmlFor="password_confirmation" className="text-lg">
            Password Confirmation:
          </label>
          <input
            className="text-lg p-2 border border-gray-500 rounded-[3px]"
            type="password"
            value={values.password_confirmation}
            onChange={handleChange}
            id="password_confirmation"
          />
        </div>

        <button
          className="mt-8 w-full text-gray-50 p-2 bg-fuchsia-900 font-bold text-lg rounded-md"
          type="submit"
        >
          Sign Up
        </button>
        <p className="text-center my-2">Or</p>
        <Link
          to="/auth/login"
          className="block text-center w-full text-gray-50 p-2 bg-fuchsia-900 font-bold text-lg rounded-md"
        >
          Login Here
        </Link>
      </form>
    </div>
  );
}
