import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";


import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import About from "./Components/About";
import TableData from "./Components/TableData";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/About' element={<About />}></Route>
        <Route exact path='/TableData' element={<TableData />}></Route>
        <Route exact path='/Blog' element={<Blog />}></Route>
        <Route exact path='/Contact' element={<Contact />}></Route>
        <Route exact path='/Services' element={<Services />}></Route>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
