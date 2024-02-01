import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/LogIn";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import ChatContainer from "./Components/ChatContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat" element={<ChatContainer />} />
        </Route>
      </Routes>
      {/* <MainContainer /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
