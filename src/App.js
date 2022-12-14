import NavBar from "./NavBar";
import Home from "./Home";
import AddPost from "./AddPost";
import { Routes, Route } from 'react-router-dom';
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
