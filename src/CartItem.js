import React from 'react';

class CartItem extends React.Component {
    render(){
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style = {styles.heading} >Phone</div>
                    <div>Rs 10999</div>
                    <div>Qty : 1</div>
                    <div className='cart-item-actions'>
                        { /* This is for buttons */ }
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
      height : 110,
      width : 110,
      borderRadius : 4,
      backgroundColor : 'lightGrey'
    },
    heading : {
        fontSize : 30
    }
}

export default CartItem;