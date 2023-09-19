import React from 'react';
import styles from "../styles/Featured.module.css"
import Image from 'next/image';

const Featured = () => {
    const images = [
        "/public/featured.png",
        "/public/featured2.png",
        "/public/featured3.png",
    ];

    const handleArrow = (direction) =>{
      if(direction==="l"){
        setIndex(index!==0 ? index-1 : 2)
      }
      if(direction==="r"){
        setIndex(index!==2 ? index+1 : 0)
      }
    }
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("")}>
        <Image src="/public/img/arrowl.png" layout='fill' objectFit="contain"/>
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100}vw)`}}>
        {images.map((img, i)=>(
            <div className={styles.imgContainer} key={i}>
                <Image src={img} layout='fill' objectFit="contain"/>
                </div>
                ))}
        </div>
        <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("")}>
        <Image src="/public/img/arrowr.png" layout='fill' objectFit="contain"/>
        </div>    
    </div>
  );
}

export default Featured;

