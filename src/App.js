import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Nav from './components/nav/nav';
import About from './components/about/about';
import SignIn from './components/signin/signin';
import Home from './components/home/home';
import Dashboard from './admin/dashboard';
import CreateProduct from './admin/components/create-product/create-product';
import ProductDetails from './components/home/product/productDetails';
import {useSelector} from 'react-redux';
import UserProfile from './components/home/userprofile/userprofile';
import Orders from './components/home/userprofile/orders';
import UserList from './admin/components/users/user-list';

function App() {
  const res = useSelector(state => state.currentUser.user)
  
  return (
    <Router>
    <div className="App">
    <Nav/>
      <Switch>
      
        <Route exact path="/"  component={Home}/>
        <Route path="/product:id" component={ProductDetails}/>
        <Route path="/about" component={About}/>
        <Route exact path="/signin" render={()=> res ? (<Redirect to="/"/>) : (<SignIn/>)}/>
        <Route exact path="/admin"  component={Dashboard}/>
        <Route path="/admin/users" component={UserList} />
        <Route path="/admin/create-product" component={CreateProduct}/>
        <Route exact path="/user-profile:id"  component={UserProfile}/>
        <Route path={`/orders`} component={Orders}/>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
