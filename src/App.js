import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage/Login";
import "./App.css";
import Home from "./components/Home/HomePage/Home";
import Details from "./components/DetailPage/Details";
import Disney from "./components/Home/pages/Disney";
import Header from "./components/Header/Header";
import Marvel from "./components/Home/pages/Marvel";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/disney" element={<Disney />} />
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
