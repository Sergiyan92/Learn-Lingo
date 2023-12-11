import css from "./Hero.module.css";
import IMG from "../../assets/img1.jpg";
const Hero = () => {
  return (
    <div className={css.hero}>
      <div className={css.hero_info}>
        <h1 className={css.title}>
          Unlock your potential with the best{" "}
          <span className={css.title_word}>language</span> tutors
        </h1>
        <p className={css.subtitle}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button className={css.btn_hero}>Get started</button>
      </div>
      <img src={IMG} alt="IMG" />
    </div>
  );
};

export default Hero;
