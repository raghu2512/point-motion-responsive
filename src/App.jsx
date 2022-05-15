import './App.css';
import Brands from './components/Brands';
import Content from './components/Content';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Content />
      <Brands />
      <Feature />
      <Footer />
    </div>
  )
}

export default App;
