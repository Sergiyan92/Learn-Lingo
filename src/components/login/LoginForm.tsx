// LoginForm.js

import { useFormik } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import close from "../../assets/close.svg";
interface Modal {
  onClose: () => void;
}
const LoginForm = ({ onClose }: Modal) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // Handle login logic here
      console.log("Logged in:", values);
      // Close the modal or perform any other actions using onClose
      onClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={css.login}>
      <button className={css.btm_close} onClick={() => onClose()}>
        <img src={close} alt="icon close" width={32} height={32} />
      </button>
      <div>
        <h2 className={css.title_login}>Log In</h2>
        <p className={css.sub_title_login}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={css.input_email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={css.input_password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>

      <div className={css.btn}>
        <button className={css.btn_login} type="submit">
          <span className={css.btn_text}>Login</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
