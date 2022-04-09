import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import {BrowserRouter , Route} from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import Registrationpage from './pages/Registrationpage';
import Loginpage from './pages/Loginpage';
import Orderspage from './pages/Orderspage';
import Adminpage from './pages/Adminpage';
function App() {
  return (
    <div className="App">
     <Nav/>
     <BrowserRouter>
     <Route path='/' exact component={Homepage} />
     <Route path='/cart' exact component={Cartpage} />
     <Route path='/registration' exact component={Registrationpage} />
     <Route path='/login' exact component={Loginpage} />
     <Route path='/orders' exact component={Orderspage} />
     <Route path='/admin' component={Adminpage}/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

 