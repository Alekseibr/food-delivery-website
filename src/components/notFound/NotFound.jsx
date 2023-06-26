import React from 'react';
import { useState, useEffect } from 'react';
import style from './notFound.module.css';
import notFound from '../../imgs/notFound/404.svg'

const NotFound = () => {
    let time = 10;
    let [index, setIndex] = useState(time)
    


    useEffect(()=>{
        setTimeout(()=> document.location.href="/", time * 1000 );
        const interval = setInterval(()=>{
            if(index > 0){
                setIndex(()=> index - 1)
            }
        },1000);
        return () =>{
            clearInterval(interval);
        };
    }, [index, time])
    
    return (
        <div className={style.wrap}>
            <div>
                <img src={notFound} alt="Ошибка 404" />
            </div>
            <div>
                <h1>Страница не найдена</h1>
            </div>
            <div>
                <h2>Если вы ввели правильный адрес, вы можете:</h2>
            </div>
            <div>
                <ul>
                    <li>Повторить попытку позже</li>
                    <li>Проверить подключение к сети</li>
                </ul>
            </div>
            <div>
                <h3>Вы будете перенаправлены на главную страницу автоматически через: <span>{index}</span>
                </h3>
            </div>
        </div>
        )
}

export default NotFound;