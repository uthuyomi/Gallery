import style from "../scss/hero/Hero.module.scss";

function Visual({ hero }) {
  return (
    <div className={style.visual}>
      <div className={style.mainview}>
        <div className={style.img}>
          <img src="" alt="main-visual" />
        </div>
      </div>
      <h1>
        {hero.catch01}
        <br />
        {hero.catch02}
      </h1>

      <a href="">Lean more</a>
    </div>
  );
}

export default Visual;
