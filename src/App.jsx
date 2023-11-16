import './App.css'

import Login from "./components/Login";
import Welcome from "./components/Welcome";
import Quote from "./components/Quote";

const App = () => {
  return (
    <div className="wrapper">
      <Login />
      <Welcome />
      <Quote />
    </div>
  )
}

export default App