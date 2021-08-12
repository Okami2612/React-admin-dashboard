import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

import Home from "./pages/home/Home";
import UserList from "./pages/List/UserList";
import ProductList from "./pages/List/ProductList";
import UserDetail from "./pages/Detail/UserDetail";
import CreateUser from "./pages/create/CreateUser";
import CreateProduct from "./pages/create/CreateProduct";

import "./app.css";
import ProductDetails from "./pages/Detail/ProductDetails";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/user/:userId">
            <UserDetail />
          </Route>
          <Route path="/product/:productId">
            <ProductDetails />
          </Route>
          <Route path="/newUser">
            <CreateUser />
          </Route>
          <Route path="/newProduct">
            <CreateProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
