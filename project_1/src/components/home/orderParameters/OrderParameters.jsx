import React from 'react';
import {useAsyncValue} from "react-router-dom";
import { productAddToCart } from '../../cart/Cart';
import style from '../selectedMenu.module.css';


const OrderParameters = (props) => {

  const product = useAsyncValue();
  
  return (
    <div className={style.wrap_description}>
      <div className={style.description}><strong>Состав:</strong> {product.description}</div>
      <div><strong>{product.weight}</strong></div>
      <div><strong>{product.price} &#8381;</strong></div>
      <div>
        <button className={style.btn} onClick={()=>{
          props.setCount((count)=> +(count + 1) );
          productAddToCart(product)
        }}>Добавить в корзину</button>
      </div>
     </div>
    )
}



export default OrderParameters;