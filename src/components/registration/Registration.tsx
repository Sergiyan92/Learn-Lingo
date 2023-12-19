import { useFormik } from "formik";
import * as Yup from "yup";
import css from "./Registration.module.css";
import close from "../../assets/close.svg";
interface Modal {
  onClose: () => void;
}

const Registration = ({ onClose }: Modal) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log("Submitted:", values);
      // Close the modal or perform any other actions
      onClose();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={css.reg}>
      <button className={css.btn_close} onClick={() => onClose()}>
        <img src={close} alt="icon close" width={32} height={32} />
      </button>
      <div>
        <h2 className={css.title_reg}>Registration</h2>
        <p className={css.sub_title_reg}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className={css.input_name}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={css.input}
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
          className={css.input}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>

      <div className={css.btn}>
        <button className={css.btn_reg} type="submit">
          <span className={css.btn_text}>Register</span>
        </button>
      </div>
    </form>
  );
};

export default Registration;
