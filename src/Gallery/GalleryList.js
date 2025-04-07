import style from "../scss/Gallery/Gallery.module.scss";
import React from "react";
import GalleryListText from "./GalleryListText";

function GalleryList({ gallery }) {
  return (
    <div className={style.GalleryList}>
      {gallery.map((item) => (
        <div className={style.Galleryitem} key={item.id}>
          <div className={style.img}>
            <img src={item.url} />
          </div>
          <div className={style.text}>
            <h2>{item.title}</h2>
            <ul>
                      <GalleryListText item={item.skills}/>  
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
export default GalleryList;
