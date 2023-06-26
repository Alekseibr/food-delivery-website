import React from 'react';
import style from './loader.module.css';

const Loader = ()=>{

    return(
        <div className={style.loaderBg}>
            <h3>Loading...</h3>
            <div className={style.loader}>
            <span></span>
            </div>
        </div>
        )
    
}

export default Loader;