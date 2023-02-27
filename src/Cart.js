import React from "react";
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
          products : [
            {
                price: 10999,
                title: "Phone",
                qty: 1,
                img: "",
                id: 1
            },
            {
                price: 1999,
                title: "Watch",
                qty: 2,
                img: "",
                id: 2
            },
            {
                price: 79999,
                title: "Laptop",
                qty: 1,
                img: "",
                id: 3
            },
            {
                price: 699,
                title: "HeadPhones",
                qty: 3,
                img: "",
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

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
                {products.map((product) => {
                    return (
                    <CartItem 
                    product = {product} 
                    key = {product.id}
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
                    />)
                })}
            </div>
        );
    }
}

export default Cart;