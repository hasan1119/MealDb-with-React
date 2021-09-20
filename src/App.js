import './App.css';
import FetchData from './components/FetchData.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Heading from './components/Heading.js';
import LoadData from './components/LoadData.js';



function App() {
  return (
  <div>
    <Header/>
 <main className='container'>
    <Heading/>
    <FetchData/>
 </main>
    <Footer/>
    
  </div>
);

}

export default App;
