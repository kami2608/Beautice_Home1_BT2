/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Home1 from './pages/Home1';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Button = tw.button`
  px-4
  py-2
  bg-blue-500
  text-white
  rounded-lg
  hover:bg-blue-700
`;

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
