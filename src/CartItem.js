import React from "react";

const CartItem = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     price: 10999,
  //     title: "Phone",
  //     qty: 1,
  //     img: "",
  //   };
    // this.increaseOuantity = this.increaseOuantity.bind(this);
  // }
  // increaseOuantity = () => {
  //   // Arrow functions automatically binds
  //   // this.state.qty++; Will not work

  //   // setState() method 1 :
  //   // this.setState({
  //   //   qty: this.state.qty + 1,
  //   // });

  //   // setState() method 2 :   If previous state is required, use this method otherwise use method 1
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty + 1,
  //     };
  //   });
  // };

  // decreaseOuantity = () => {
  //   const {qty} = this.state;
  //   if(qty===0) return;
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty - 1,
  //     };
  //   });
  // };

  const { price, title, qty, img } = props.product;
  const { product,onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img src = {img} alt="" style={styles.image} />
      </div>
      <div className="right-block">
        <div style={styles.heading}>{title}</div>
        <div>Rs {price}</div>
        <div>Qty : {qty}</div>
        <div className="cart-item-actions">
          {/* This is for buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
            //   onClick = {this.increaseOuantity.bind(this)}
            onClick = {() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
            onClick = {() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            onClick = {() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  image: {
    height: 200,
    width: 160,
    borderRadius: 4,
    backgroundColor: "lightGrey",
  },
  heading: {
    fontSize: 30,
  },
};

export default CartItem;
