
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Addbooks from './pages/Addbooks';
import Books from './pages/Books';
import Home from './pages/Home';
import EditBooks from './pages/EditBooks'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/books' element={<Books />} />
        <Route exact path='/addbooks' element={<Addbooks />} />
        <Route exact path='/updateBooks/:id' element={<EditBooks />}/>
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
