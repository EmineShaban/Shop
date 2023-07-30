import './App.css';
import Filters from './components/Filters';
import Phone from './components/Phone';
import Laptop from './components/Laptop';
import Desktop from './components/Desktop';
import Keyboard from './components/Keyboard';
import Mouse from './components/Mouse';

import { Link } from "react-router-dom"

import { Routes, Route } from 'react-router-dom'
import ListOfProducts from './components/ListOfProducts';
import Policy from './components/additional/Policy';
import Contact from './components/additional/Contact';
import Terms from './components/additional/Terms';

function App() {
  return (
    <div className="app">

      
      <header className="App-header">
        <div className='logo-img'>
          <img src='./images/logo.webp' alt='logo'/>
        </div>

        <ul>
        
        <li>
                    <Link to={'/'}><a>Home</a></Link>

                </li>
                <li>
                    <Link to={'/phone'}><a>Phone</a></Link>

                </li>
                <li>
                    <Link to={'/desktop'}><a>Desktop</a></Link>

                </li>
                <li>
                    <Link to={'/laptop'}><a>Laptop</a></Link>

                </li>
                <li>
                    <Link to={'/mouse'}><a>Mouse</a></Link>

                </li>
                <li>
                    <Link to={'/keyboard'}><a>Keyboard</a></Link>

                </li>
                </ul>
       
      </header>


      <div className='container'>
        <Filters />
        {/* <ListOfProducts /> */}
        <Routes>
            <Route path='/' element={<ListOfProducts />} />
            <Route path='/phone' element={<Phone />} />
            <Route path='/laptop' element={<Laptop />} />
            <Route path='/desktop' element={<Desktop />} />
            <Route path='/mouse' element={<Mouse />} />
            <Route path='/keyboard' element={<Keyboard />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/contact' element={<Contact />} />

            

          </Routes>
      </div>


<footer>
  <div>

  
  <ul>
    <li>
    <Link to={'/contact'}><a>Contact Us</a></Link>

     </li>
    <li>
    <Link to={'/policy'}><a>Privacy Policy</a></Link>


    </li>
    <li>
    <Link to={'/terms'}><a>Terms and Conditions</a></Link>

     </li>
  </ul>
  <hr></hr>
  <p>All rights reserved © Prom</p>
  </div>
</footer>
    </div>
  );
}

export default App;
