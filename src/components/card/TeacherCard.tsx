// TeacherCard.tsx
import React, { useState, useEffect } from "react";
import css from "./TeachersCard.module.css";
import book from "../../assets/book-open-01.svg";
import star from "../../assets/star.svg";
import heart from "../../assets/hard.svg";

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
  onAddToFavorites?: (teacher: Teacher) => void;
  onRemoveFromFavorites?: (teacher: Teacher) => void;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  teacher,
  expanded,
  onReadMoreToggle,
  onBookTrialLesson,
  onAddToFavorites,
  onRemoveFromFavorites,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if teacher is in favorites on component mount
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav: Teacher) => fav.name === teacher.name));
  }, [teacher]);

  const handleFavoriteClick = () => {
    // Toggle favorite status
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);

    // Retrieve current favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      // If the teacher is already a favorite, remove them
      const updatedFavorites = favorites.filter(
        (fav: Teacher) => fav.name !== teacher.name
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // If the teacher is not a favorite, add them
      favorites.push(teacher);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    if (isFavorite && onRemoveFromFavorites) {
      onRemoveFromFavorites(teacher);
    } else if (!isFavorite && onAddToFavorites) {
      onAddToFavorites(teacher);
    }
  };

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
            </span>{" "}
            |
            <img className={css.icon} src={star} alt="star icon" />
            <span className={css.subtitle}>Rating: {teacher.rating}</span> |
            <span className={css.subtitle}>
              Price 1 / hour:
              <span className={css.price}> {teacher.price_per_hour}$</span>
            </span>
            <div>
              <button
                type="button"
                className={css.btn_heart}
                onClick={handleFavoriteClick}
              >
                <img
                  src={heart}
                  alt="heart icon"
                  className={
                    css.btn_heart + (isFavorite ? " " + css.favorite : "")
                  }
                />
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
