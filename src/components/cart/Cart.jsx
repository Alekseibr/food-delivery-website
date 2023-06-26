import React from 'react';
import {useState, useEffect} from 'react';
import style from './cart.module.css';
import garbage from '../../imgs/cart/garbage.svg';
import {Link} from 'react-router-dom';

//определем продукт как пустой массив или берем и парсим JSON из сессии
let product = JSON.parse(sessionStorage.getItem('product')) || [];

//функция получения товара в корзину и обработки его на дубли с добавлением в массив product
function productAddToCart(productAny){
  /*увеличили количество элементов объекта (amount) и ставим productAny в null,
   если в функцию пришел один и тот же объект*/
  for(let i of product){
    if(i.title === productAny['title']){
      i.amount++;
      productAny = null;
      break;
    }
  }
 //если это новый объект (не дубль) то добавляем его в массив
  if(productAny){
    product.push(productAny);
  }
}

const Cart =(props) => {
  //Закидываем в сессию JSON преобразуя в строку (для перезагрузки страницы)
  sessionStorage.setItem('product', JSON.stringify(product));
  
  let timeoutId; // идентификатор таймаута для кнопки, чтобы впоследующем очищать таймаут
  let [productState, setProductState] = useState(product);
  let [amount, setAmount] = useState(product);

  useEffect(()=>{
    setProductState(product)
    setAmount(product)
  }, [productState, amount])


  function reducer(arr) {
    let result = arr.reduce((sumElem, elem)=>sumElem + elem.amount, 0);
    return result;
  }
  function delProduct(elem){
    for(let i = 0; i < productState.length; i++){
      if(productState[i].title === elem.title){
        setProductState(productState.splice(i, 1));
      }
    }
  }

  function incriment(i){
    setAmount(i.amount += 1);
    }
  
    function decriment(i){
      if(i.amount > 1) setAmount(i.amount -= 1);
    }

    //высчитываем итоговую сумму заказа
    let price = productState.reduce((sumElem, elem)=>sumElem + elem.price * elem.amount, 0);
    //устанавливаем в App итоговую сумму, для передачи в форму заказа DeliveryAddress
    // props.setTotalPrice(price);
    
  let totalPrice = props.setTotalPrice;
  useEffect(()=>{
    //устанавливаем в App итоговую сумму, для передачи в форму заказа DeliveryAddress
    totalPrice(price);
  }, [price, totalPrice]);
    
    return (
      <>
      <h2 className={style.title}>{product.length === 0 ? 'Корзина пуста' : 'Корзина'}</h2>  
        {product.length !== 0 && productState.map((i)=>
        <div key={i.id}> 
        <div className={style.wrapAll} >
          <div>
            <img src={i.url} alt={i.title} className={style.productImg}/> 
          </div>
          <div className={style.productName}><h3>{i.title}</h3></div>
          <div className={style.menuWrap}>
            <div>{i.weight}</div>
            <div>{i.price * i.amount} &#8381;</div>
            <div className={style.wrapCount}>
              <div>
                <button className={style.btn} 
                onClick={(e)=>{
                e.target.className = [style.btn, style.clickBtnDown].join(' ');//добавляем класс на кнопку, нельзя добавляьб через состояние иначе все кнопки будут получать класс сразу
                timeoutId = setTimeout(()=> e.target.className = style.btn, 100); // для возврата состояния чтобы кнопка снова реагировала на нажатие
                decriment(i); 
                props.countCartElem(reducer(productState))}}
                onMouseUp={()=> clearInterval(timeoutId)} // чистим таймаут
                >-</button>
              </div>
              <div>{i.amount}</div>
              <div >
                <button className={style.btn} 
                onClick={(e)=>{
                e.target.className = [style.btn, style.clickBtnDown].join(' ');
                timeoutId = setTimeout(()=> e.target.className = style.btn, 100); // для возврата состояния чтобы кнопка снова реагировала на нажатие
                incriment(i); 
                props.countCartElem(reducer(productState))}}
                 onMouseUp={()=> clearInterval(timeoutId)} // чистим таймаут
                >+</button>
              </div>
            </div>
          </div>
          <div className={style.garbage}>
            <button onClick={()=>{delProduct(i); props.countCartElem(reducer(productState))}}>
              <img src={garbage} alt="удалить" aria-hidden="true" />
            </button>
          </div>
        </div>
        </div>)}
        {
        product.length !== 0 && 
        <div className={style.totalAmount}>
          <div>
            <h3>Итоговая сумма:{price} &#8381;
            </h3>
          </div>
          <div>
          <Link to="deliveryAddress">
              <button> 
                Заказать
              </button>
              </Link>
          </div>
        </div>
        
        }
      </>
      )
}


export {productAddToCart, product};
export default Cart;