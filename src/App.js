import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products : [
        {
            price: 10999,
            title: "Phone",
            qty: 1,
            img: "https://www.mintmobile.com/wp-content/uploads/2022/09/iPhone_14_Plus_ProductRED_PDP_Image_Position-1A__en-US-min-1.png",
            id: 1
        },
        {
            price: 1999,
            title: "Watch",
            qty: 2,
            img: "https://m.media-amazon.com/images/I/71UXbfMHImS._UY445_.jpg",
            id: 2
        },
        {
            price: 79999,
            title: "Laptop",
            qty: 1,
            img: "https://m.media-amazon.com/images/I/41vbmwe7e4L._SY450_.jpg",
            id: 3
        },
        {
            price: 699,
            title: "HeadPhones",
            qty: 3,
            img: "https://m.media-amazon.com/images/I/61O0rXhhP6L._SL1500_.jpg",
            id: 4
        },
      ]
    };
  }

  handleIncreaseQuantity = (product) =>{
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty++;
      this.setState({
          // products : products // First products is the one used in this function and second is the global one
          // Since the name is same, it can also be written as : 
          products
      });
  }

  handleDecreaseQuantity = (product) =>{
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0) return;
      products[index].qty--;
      this.setState({
          // products : products // First products is the one used in this function and second is the global one
          // Since the name is same, it can also be written as : 
          products
      });
  }

  handleDeleteProduct = (id) => {
      const {products} =  this.state;
      const items = products.filter((item) => item.id !== id);
      this.setState({
          products: items
      });
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0; 
    products.forEach((item) => {
      count += item.qty;
    });
    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.qty;
    });
    return total;
  }

  render(){
    const {products}= this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize : 30, padding : 20}}>Total Amount : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;