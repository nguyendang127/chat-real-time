import { ChatEngine } from "react-chat-engine";
import "./App.css";
import "antd/dist/antd.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const projectID = "9b08caf6-c099-495d-b851-2532184ee14f";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
