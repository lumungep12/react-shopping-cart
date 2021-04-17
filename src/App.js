//Frature One
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import AdminDash from './Pages/AdminDash';
import Navbar from './Components/Navbar';
 

class App extends React.Component {
  render(){
  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className="grid-container">
      <header>
        <Navbar/>
      </header>
      <main>
              <Route path="/" exact component={Home} />
              <Route path="/shop" component={Shop} />
              <Route path="/admin" component={AdminDash} />
      </main>
      <footer>
        All rights are Reserved
      </footer>
    </div>
    </BrowserRouter>
    </Provider>
  );
  }
}

export default App;
