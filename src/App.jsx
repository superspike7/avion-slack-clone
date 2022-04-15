import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import ChannelForm from "./components/ChannelForm";
import ChannelMessage from "./components/ChannelMessage";
import ChannelInvite from "./components/ChannelInvite";
import DirectMessage from "./components/DirectMessage";
import Dashboard from "./components/Dashboard";
import MessageForm from "./components/MessageForm";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  return (
    <>
      <ReactQueryDevtools />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="channels/new" element={<ChannelForm />} />
          <Route path="messages/new" element={<MessageForm />} />
          <Route path="channels/:id" element={<ChannelMessage />} />
          <Route path="channels/:id/invite" element={<ChannelInvite />} />
          <Route path="dm/:id" element={<DirectMessage />} />
        </Route>
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
