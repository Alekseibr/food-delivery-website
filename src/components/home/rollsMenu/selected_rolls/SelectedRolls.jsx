import React, { Suspense} from 'react';
import {Await, defer, useAsyncValue, useLoaderData} from "react-router-dom";
import Loader from '../../../Preloader/Loader';
import OrderParameters from '../../orderParameters/OrderParameters';
import NotFound from '../../../notFound/NotFound';
import style from '../../selectedMenu.module.css';

//из загрузчика фетчим и возвращаем json по конкретному продукту иначе прокидываем ошибку
async function getSelectItem(id){
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/rolls/${id}`);
    if(!res.ok) {
        throw new Response('', {status: res.status})
    }
    return res.json();
}

/*Наш загрузчик который определен в App. Получает id продукта и вызывает функцию getSelectItem(id), 
чтобы получить json по конкретному продукту Обязательно делаем отложенную загрузку через defer, 
чтобы отлавливать ошибку на fetch*/
const selectLoaderRolls = async ({params}) => {
    const id = params.id;
    return defer({
        rolls:getSelectItem(id), id,
    })
}

/*В итоге готовый json по конкретному продукту падает в useAsyncValue(), 
получаем данные через асинхронное значение*/
const Rolls = ()=>{
    const rolls = useAsyncValue();
    return (
        <>
            <h2 className={style.title}>{rolls.title}</h2>
            <div className={style.wrapCard}>
                <div className={style.card}>
                    <img src={rolls.url} alt="картинка" />
                </div>
            </div>
        </>
        )
}

/*Основной компонент который получает из загрузчика промис, показывает loader и рендерит либо компонент 
 ошибки либо данные полученные из комронента Rolls через асинхронное значение и OrderParameters
в OrderParameters передаем пропсом установку счетчика из App для отрисовки количества заказов в header.*/
const SelectedRolls = (props) => {
    const {rolls} = useLoaderData();
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Await resolve={rolls} errorElement={<NotFound />}>
                    <div className={style.wrapAll}>
                        <Rolls />
                        <OrderParameters setCount={props.countCartElem}/>
                    </div>
                </Await>
            </Suspense>
        </>
        )
}

export {selectLoaderRolls};
export default SelectedRolls;