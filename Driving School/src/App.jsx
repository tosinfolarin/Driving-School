import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import BookNow from './components/BookNow';
// import FAQs from './components/FAQs';
// import Pricing from './components/Pricing';


// import Homepage from './components/Homepage';
// import Footer from './components/Footer';

// import ShowMeTellMe from './components/SmeTme';
// import YelpLanding from './components/YelpLanding';
// import { Button } from './components/ui/SearchButton';
// import { Input } from './components/ui/input';
// import InputWithButton from './components/YelpSearch';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import FAQPage from "./components/FAQPage";
import TestQuestions from './components/Test-Questions';
import MSchools from './components/MoreSchools';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/FAQs" element={<FAQPage />} />
        <Route path="/test-questions" element={<TestQuestions/>} />
        <Route path="/more-schools" element={<MSchools/>} />
      </Routes>
    </Router>
  );
}


export default App;


