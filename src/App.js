//Frature One
import React from 'react';
import Cart from './Components/Cart';
import Filter from './Components/Filter';
import Products from './Components/Products';
import store from './store';
import { Provider } from 'react-redux';
 

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) :[],
  //   };
  // }

  // createOrder = (order) => {
  //   alert("You need to save order for " + order.name)
  // }

  // removeFromCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({cartItems : cartItems.filter((x) => x._id  !== product._id),
  //   });
  //   localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
  // };

  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if(item._id === product._id){
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if(!alreadyInCart){
  //     cartItems.push({...product, count: 1});
  //   }
  //   this.setState({cartItems});
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  // sortProducts = (e) => {
  //   const sort = e.target.value;
  //   this.setState((state) => ({
  //     sort: sort,
  //     products: this.state.products.slice().sort((a, b) => 
  //     sort === "lowest" ?
  //     a.price > b.price ?
  //     1 : -1:
  //     sort === "highest" ?
  //     a.price < b.price ?
  //     1 : -1:
  //     a._id > b._id ?
  //     1 : -1 ),
  //   }));
  // };

  // filterProducts = (e) => {

  //   if(e.target.value === ""){
  //     this.setState({
  //       size: e.target.value,
  //       product: data.products
  //     });
  //   }else{
  //   this.setState({
  //     size: e.target.value,
  //     products: data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0)
  //   });
  // }
  // }


  render(){
  return (
    <Provider store={store}>
    <div className="grid-container">
      <header>
        <a href="/">React Shopping</a>
      </header>
      <main>
        <div className="content">
          <div className="mainContent">
            <Filter/>
            <Products 
              addToCart={this.addToCart} 
            />
          </div>
          <div className="sideBar">
            <Cart/>
          </div>
        </div>
      </main>
      <footer>
        All rights are Reserved
      </footer>
    </div>
    </Provider>
  );
  }
}

export default App;
