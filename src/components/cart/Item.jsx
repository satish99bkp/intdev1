import React, { useContext } from 'react'
import { CartContext } from '../../context/Cartcontext';

const Item = (props) => {
    const Cart=useContext(CartContext);
    
  return (
    <div className='cart-item'>
        <h5>{props.name}</h5>
        <p> Price: ${props.price}</p>
        <button onClick={()=>Cart.setitems(
          [
            ...Cart.items, 
              {name: props.name, price:props.price}
          ]
          )}>Add Item </button>
      
    </div>
  )
}

export default Item;
