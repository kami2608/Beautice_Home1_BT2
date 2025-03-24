/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Home1 from './pages/Home1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home1} />
      </Routes>
    </Router>
  );
}

export default App;
