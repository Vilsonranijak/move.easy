import { useState } from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return <>{!authenticated ? <Login onLogin={() => setAuthenticated(() => true)} /> : <Home />}</>;
}
