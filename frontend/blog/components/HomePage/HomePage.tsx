import React from "react";
import Header from "../header/Header";
import style from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Header />
        <div className={style.top__content}>
          <p className={style.top__content__title}>Resources</p>
          <h1 className={style.top__content__heading}>Teach Blog</h1>
          <p className={style.top__content__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </p>
          
        </div>
      </div>
      <div className={style.bottom}></div>
    </div>
  );
}
