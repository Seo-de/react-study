import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/*  Route를 찾아 컴포넌트 렌더링, 한 번에 하나의 Route만 렌더링 위함함 */}
      <Routes>
        {/* Route 안에 컴포넌트를 적어줌 // Home으로 가도록 설정 */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
