import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    // console.log(cart);
    let message;
    if(cart.length === 0){
        message = <p>Please add some products.</p>
    }
    else{
        message = <div>
            <h3>You are rich man</h3>
            <p>Thank you!!</p>
        </div>
    }
    return (
        <div>
            <h3 className={cart.length > 0 ? 'yellow' : 'red'}>Order Summary: {cart.length}</h3>

            <p className={`bold bordered ${cart.length > 4 ? 'goldenrod' : 'blue'}`}>Some info about Order</p>

            {cart.length > 2 ? <span>Wow !! Rich man</span> : <span>Poor man</span>}

            {message}

            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }

            {
                cart.length === 2 && <p>You bought two products only</p>
            }

            {
                cart.length === 3 || <p>not three ok!!</p>
            }
        </div>
    );
};

export default Cart;