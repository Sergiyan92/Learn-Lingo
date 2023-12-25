// TeacherCard.tsx
import React from "react";
import css from "./TeachersCard.module.css";
import book from "../../assets/book-open-01.svg";
import star from "../../assets/star.svg";
import heart from "../../assets/hard.svg";
// import BookTrial from "../book-trial/BookTrial";

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface Teacher {
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: Review[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
}

interface TeacherCardProps {
  teacher: Teacher;
  expanded: boolean;
  onReadMoreToggle: (teacherId: string) => void;
  onBookTrialLesson: (teacherInfo: {
    avatar_url: string;
    name: string;
  }) => void;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  teacher,
  expanded,
  onReadMoreToggle,
  onBookTrialLesson,
}) => {
  return (
    <li className={css.card}>
      <div>
        <img
          src={teacher.avatar_url}
          className={css.avatar}
          alt="Teacher Avatar"
        />
      </div>
      <div>
        <div>
          <div className={css.info}>
            <p className={css.title}>Languages</p>
            <img className={css.icon} src={book} alt="book icon" />
            <span className={css.subtitle}>Lessons online</span> |
            <span className={css.subtitle}>
              Lessons done: {teacher.lessons_done}
            </span>
            | <img className={css.icon} src={star} alt="star icon" />
            <span className={css.subtitle}>Rating: {teacher.rating}</span> |
            <span className={css.subtitle}>
              Price 1 / hour:
              <span className={css.price}> {teacher.price_per_hour}$</span>
            </span>
            <div>
              <button type="button" className={css.btn_heart}>
                <img src={heart} alt="heart icon" />
              </button>
            </div>
          </div>
          <h2 className={css.name}>
            {teacher.name} {teacher.surname}
          </h2>
          <div className={css.info_leng}>
            <span className={css.title_sub}>Speaks:</span>
            <span className={css.leng}> {teacher.languages.join(", ")}</span>
          </div>
          <div className={css.lesson}>
            <span className={css.title_sub}>Lesson Info:</span>
            <span className={css.title_lesson}>
              {" "}
              {teacher.lesson_info}
            </span>{" "}
          </div>
          <div className={css.lesson}>
            <span className={css.title_sub}>Conditions: </span>
            <span className={css.title_lesson}>
              {teacher.conditions.join(" ")}
            </span>
          </div>
        </div>
        <div>
          {expanded ? (
            <>
              <ul>
                <div className={css.exp}>{teacher.experience}</div>
                {teacher.reviews.map((review, reviewIndex) => (
                  <div key={reviewIndex}>
                    <div className={css.info_coment}>
                      <span className={css.title_sub}>
                        {review.reviewer_name}{" "}
                      </span>
                      <div className={css.raiting}>
                        <img
                          className={css.icon_raiting}
                          src={star}
                          alt="star icon"
                        />
                        {review.reviewer_rating}
                      </div>
                      <span>{review.comment}</span>
                    </div>
                  </div>
                ))}
                <button
                  className={css.btn_book}
                  onClick={() =>
                    onBookTrialLesson({
                      avatar_url: teacher.avatar_url,
                      name: `${teacher.name} ${teacher.surname}`,
                    })
                  }
                >
                  <span className={css.btn_book_text}>Book trial lesson</span>
                </button>
              </ul>
              <button
                className={css.btn_read}
                onClick={() => onReadMoreToggle(teacher.name + teacher.surname)}
              >
                Read Less
              </button>
            </>
          ) : (
            // Скорочена інформація
            <button
              className={css.btn_read}
              onClick={() => onReadMoreToggle(teacher.name + teacher.surname)}
            >
              Read More
            </button>
          )}
        </div>
        <div className={css.level}>
          {teacher.levels.map((level, levelindex) => (
            <div key={levelindex} className={css.level_leng}>
              #{level}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default TeacherCard;
