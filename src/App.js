
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Category from './components/Category';
import {Routes,Route} from "react-router-dom";
import Groceries from './components/CategoryPages/Groceries';
import Electronics from './components/CategoryPages/Electronics';
import Clothing from './components/CategoryPages/Clothing';
import Beauty from './components/CategoryPages/Beauty';
import Admin from './components/Admin';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Category} />
        <Route path='/groceries' Component={Groceries} />
        <Route path='/electronics' Component={Electronics} />
        <Route path='/clothing' Component={Clothing} />
        <Route path='/beauty' Component={Beauty} />
        <Route path='/admin' Component={Admin} />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
