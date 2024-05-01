import './App.css';
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
import AboutMePage from './components/AboutMePage';
import BookingPage from './components/BookingPage';

// import Search from './components/Search/Search';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/FAQs" element={<FAQPage />} />
        <Route path="/test-questions" element={<TestQuestions/>} />
        <Route path="/more-schools" element={<MSchools/>} />
        <Route path="/about-me" element={<AboutMePage/>} />
        <Route path="/book-now" element={<BookingPage/>} />





        {/* <Route path="/search" element={<Search/>}/> */}
      </Routes>
    </Router>
  );
}


export default App;


