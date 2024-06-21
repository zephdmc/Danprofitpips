import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import ContactUsSection from './Components/Contact';
import ArticleDetail from './Services/blog/ArticleDetails';
import AllBlog from './Services/blog/AllBlog';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<ContactUsSection />} />
          <Route path="/items/:id" element={<ArticleDetail />} />
          <Route path="/AllBlog" element={<AllBlog /> } />
        </Routes>
      </div>
      </Router>
  );
}


export default App;







