import {Routes, Route} from "react-router-dom";
import Callback  from "./oauth/Callback.tsx";

import './App.css'
import Authenticator from "./oauth/authenticator.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div><h1>Welcome to the App!</h1><Authenticator/></div>} />
      <Route path="/oauth-callback" element={<Callback/>} />
    </Routes>
  )
}

export default App
