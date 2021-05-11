
import './App.css';
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Dashboard from './Dashboard/Dashboard'
import {
    BrowserRouter as Router,
    Switch,
  Route,
Link} from "react-router-dom"
import { UserProvider } from './UserContext'
import Userlist from './Userlist';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';
import Productlist from './Productlist';
import Productcreate from './Productcreate';
import Productedit from './Productedit';
import { ProductProvider } from './ProductContext';


function App() {

  return <Router>
        <div id="wrapper">
        <UserProvider>
             <ProductProvider>
           <Sidebar></Sidebar>
          
           <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div className="container-fluid">
                <Switch>
                  <Route path = "/Dashboard" component = {Dashboard} exact = {true}/>
                  <Route path = "/Users" component = {Userlist} exact = {true}/>
                  <Route path = "/UserCreate" component = {UserCreate} exact = {true}/>
                  <Route path = "/Products" component = {Productlist} exact = {true}/>
                  <Route path = "/Productcreate" component = {Productcreate} exact = {true}/>
                  <Route path = "/UserEdit/:id" component = {UserEdit} exact = {true}/>
                  <Route path = "/Productedit/:id" component = {Productedit} exact = {true}/>
                </Switch>
            
              </div>
            </div>
          </div>
          </ProductProvider>
          </UserProvider>
        </div>
  </Router>
          
    

}

export default App;
