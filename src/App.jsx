import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <ReactQueryDevtools />
      <Routes>
        <Route index element={<Layout />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
