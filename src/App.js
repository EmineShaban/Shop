import './App.css';
import Filters from './components/Filters';
import ListOfProducts from './components/ListOfProducts';

function App() {
  return (
    <div className="app">

      
      <header className="App-header">
        <div className='logo-img'>
          <img src='./images/logo.webp' alt='logo'/>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#phone">Phone</a>
          </li>
          <li>
            <a href="#laptop">Laptop</a>
          </li>
          <li>
            <a href="#mouse">Mouse</a>
          </li>
          <li>
            <a href="#keyboard">Keyboard</a>
          </li>
        </ul>
        <div className='order'>
          <a href='#order'>ORDER</a>
        </div>
       
      </header>


      <div className='container'>
        <Filters />
        <ListOfProducts />
      </div>



    </div>
  );
}

export default App;
