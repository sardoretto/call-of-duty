import { Route, Routes } from "react-router-dom";
import AboutRoute from "./pages/about";
import HomeRoute from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
      </Routes>
    </div>
  );
}

export default App;
