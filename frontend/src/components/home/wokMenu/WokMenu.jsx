
import React, { Suspense } from 'react';
import {Link, useLoaderData, defer, Await} from "react-router-dom";
import Loader from '../../Preloader/Loader';
import NotFound from '../../notFound/NotFound';
import style from '../menu.module.css';

async function getMenu(){
  const res = await fetch(`${process.env.REACT_APP_API_URL}/wok`);
  if(!res.ok) {
    throw new Response('', {status: res.status})
  }
  return res.json();
}
const wokMenuLoader = async() => {
    return defer({
      menu: getMenu(),
    })
  }
  
const WokMenu = ()=>{
  const {menu} = useLoaderData();
 
  return (
    <>
   <h2 className={style.title}>Меню Лапши Wok</h2>
   <Suspense fallback={<Loader />}>
    <Await resolve={menu} errorElement={<NotFound />} >
        {
          (resolvedMenu)=>(
              <div className={style.wraperMain}>
              {resolvedMenu.map(k => (
              <figure key={k.id}>
                <div key={k.id}  className={style.wrapCard}>
                  <Link to={`/wokMenu/${k.id}`}>
                    <img className={style.card} src={k.url} alt='картинка'/>
                  </Link>
                </div>
                <figcaption className={style.productName}>{k.title}</figcaption>
              </figure>
                ))}
             </div>
            )
        }
    </Await>
   </Suspense>
   
   </>
)
}


export {wokMenuLoader};
export default WokMenu;