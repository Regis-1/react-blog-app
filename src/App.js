import NavBar from "./NavBar";
import Home from "./Home";
import AddPost from "./AddPost";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPost" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
