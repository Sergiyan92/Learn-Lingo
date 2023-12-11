import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      <h2 className={css.footer_title}>
        32,000 +<span className={css.footer_subtitle}>Experienced tutors</span>
      </h2>
      <h2 className={css.footer_title}>
        300,000 +
        <span className={css.footer_subtitle}>5-star tutor reviews</span>
      </h2>
      <h2 className={css.footer_title}>
        120 +<span className={css.footer_subtitle}>Subjects taught</span>
      </h2>
      <h2 className={css.footer_title}>
        200 +<span className={css.footer_subtitle}>Tutor nationalities</span>
      </h2>
    </div>
  );
};

export default Footer;
