import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyles";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
function App() {
  return (
    <>
      <GlobalStyle />
     <Router>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
    </>
  );
}

export default App;
