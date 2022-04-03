import React from 'react';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './components/Registration';
import Login from './components/Login';
function App() {

  return (
    <>

      <Router>
        <Header/>
        <div className='container my-3'>
          <Routes>
            
            <Route exact path='/aboutus' element={<AboutUs />}></Route>
            <Route exact path='/contactus' element={<ContactUs />}></Route>
            <Route exact path='/services' element={<Services />}></Route>
            <Route exact path='/testimonial' element={<Testimonial />}></Route>
            <Route exact path='/gallery' element={<Gallery />}></Route>

            <Route exact path='/registration' element={<Registration />}></Route>
            
            <Route exact path='/login' element={<Login />}></Route>
          </Routes>
        </div>
        {/* <a id="services"></a>
        <Services />
        <a id="aboutus"></a>
        <AboutUs />
        <a id="gallery"></a>
        <Gallery />
        <a id="contactus"></a>
        <ContactUs />
        <a id="testimonial"></a>
        <Testimonial />  */}
        <Footer/>
      </Router>

    </>
  );
}

export default App;
