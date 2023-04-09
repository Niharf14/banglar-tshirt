import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    console.log(cart);
    return (
        <div>
            <h3>Order Summary: {cart.length}</h3>
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;