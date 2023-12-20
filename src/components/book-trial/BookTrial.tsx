import { useFormik } from "formik";
import * as Yup from "yup";
import close from "../../assets/close.svg";
import css from "./BokkTrial.module.css";

interface TrialLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacherInfo: {
    avatar_url: string;
    name: string;
  };
}
const BookTrial: React.FC<TrialLessonModalProps> = ({
  isOpen,
  onClose,
  teacherInfo,
}) => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phonenumber: "",
      reasonForLearning: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phonenumber: Yup.number().required("Required"),
      reasonForLearning: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // Handle login logic here
      console.log("Logged in:", values);
      // Close the modal or perform any other actions using onClose
      formik.resetForm();
      onClose();
    },
  });
  if (!isOpen) {
    return null;
  }
  return (
    <div className={css.overlay} onClick={onClose}>
      <form onSubmit={formik.handleSubmit}>
        <div className={css.modal} onClick={(e) => e.stopPropagation()}>
          <button className={css.btm_close} onClick={() => onClose()}>
            <img src={close} alt="icon close" width={32} height={32} />
          </button>
          <h2 className={css.title_book}>Book trial lesson</h2>
          <p className={css.sub_title_book}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
          <div className={css.info}>
            <img
              className={css.img_avatar}
              src={teacherInfo.avatar_url}
              alt={`${teacherInfo.name}'s Avatar`}
              width={44}
              height={44}
            />
            <div className={css.info_text}>
              <span className={css.info_title}>Your teacher</span>
              <span className={css.info_sub}>{teacherInfo.name}</span>
            </div>
          </div>
          <h3 className={css.sub_title}>
            What is your main reason for learning English?
          </h3>
          <div>
            <label className={css.lable}>
              <input
                type="radio"
                id="careerAndBusiness"
                name="reasonForLearning"
                value="Career and Business"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={
                  formik.values.reasonForLearning === "Career and Business"
                }
                className={css.custom_radio}
              />
              Career and Business
            </label>
          </div>
          <div>
            <label className={css.lable}>
              <input
                type="radio"
                id="lessonForKids"
                name="reasonForLearning"
                value="Lesson for Kids"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.reasonForLearning === "Lesson for Kids"}
              />
              Lesson for Kids
            </label>
          </div>
          <div>
            <label className={css.lable}>
              <input
                type="radio"
                id="livingabroad"
                name="reasonForLearning"
                value="Living abroad"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.reasonForLearning === "Living abroad"}
              />
              Living abroad
            </label>
          </div>
          <div>
            <label className={css.lable}>
              <input
                type="radio"
                id="examsandcoursework"
                name="reasonForLearning"
                value="Exams and coursework"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={
                  formik.values.reasonForLearning === "Exams and coursework"
                }
              />
              Exams and coursework
            </label>
          </div>
          <div>
            <label className={css.lable}>
              <input
                type="radio"
                id="culturetravelorhobby"
                name="reasonForLearning"
                value="Culture, travel or hobby"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={
                  formik.values.reasonForLearning === "Culture, travel or hobby"
                }
              />
              Culture, travel or hobby
            </label>
          </div>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullname}
            className={css.input_fullname}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <div>{formik.errors.fullname}</div>
          ) : null}
          <div>
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
              type="number"
              id="phonenumber"
              name="phonenumber"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phonenumber}
              className={css.input_email}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber ? (
              <div>{formik.errors.phonenumber}</div>
            ) : null}
          </div>
          <div className={css.btn}>
            <button className={css.btn_book} type="submit">
              <span className={css.btn_text}>Book</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookTrial;
