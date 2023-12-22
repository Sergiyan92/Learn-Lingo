import React, { useEffect, useState } from "react";
import css from "./Teachers.module.css";
import DropdownList from "../filter/DropdownList";
import book from "../../assets/book-open-01.svg";
import star from "../../assets/star.svg";
import heart from "../../assets/hard.svg";
import BookTrial from "../book-trial/BookTrial";

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

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [displayedTeachers, setDisplayedTeachers] = useState<Teacher[]>([]);
  const [teachersToShow, setTeachersToShow] = useState<number>(4);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const [expandedTeachers, setExpandedTeachers] = useState<
    Record<string, boolean>
  >({});
  const [isTrialLessonModalOpen, setIsTrialLessonModalOpen] = useState(false);
  const [selectedTeacherInfo, setSelectedTeacherInfo] = useState<{
    avatar_url: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch("/teachers.json");
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching teachers", error);
      }
    };

    fetchTeachers();
  }, []);

  useEffect(() => {
    setDisplayedTeachers(teachers.slice(0, teachersToShow));
  }, [teachers, teachersToShow]);

  const languageOptions = [
    { value: "English", label: "English" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" },
    { value: "German", label: "German" },
    { value: "Mandarin Chinese", label: "Mandarin Chinese" },
  ];

  const levelOptions = [
    { value: "A1 Beginner", label: "A1 Beginner" },
    { value: "A2 Elementary", label: "A2 Elementary" },
    { value: "B1 Intermediate", label: "B1 Intermediate" },
    { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
    { value: "C1 Advanced", label: "C1 Advanced" },
    { value: "C2 Proficient", label: "C2 Proficient" },
  ];

  const priceOptions = [
    { value: "25", label: "25$" },
    { value: "27", label: "27$" },
    { value: "28", label: "28$" },
    { value: "30", label: "30$" },
    { value: "32", label: "32$" },
    { value: "35", label: "35$" },
  ];
  const filterTeachers = (
    language: string | null,
    level: string | null,
    price: string | null
  ) => {
    let filteredTeachers = teachers;

    if (language) {
      filteredTeachers = filteredTeachers.filter((teacher) =>
        teacher.languages.includes(language)
      );
    }

    if (level) {
      filteredTeachers = filteredTeachers.filter((teacher) =>
        teacher.levels.includes(level)
      );
    }

    if (price) {
      filteredTeachers = filteredTeachers.filter(
        (teacher) => teacher.price_per_hour.toString() === price
      );
    }

    setDisplayedTeachers(filteredTeachers.slice(0, teachersToShow));
  };

  const handleLanguageChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedLanguage(selectedOption ? selectedOption.value : null);
    filterTeachers(
      selectedOption ? selectedOption.value : null,
      selectedLevel,
      selectedPrice
    );
  };

  const handleLevelChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedLevel(selectedOption?.value || null);
    filterTeachers(
      selectedLanguage,
      selectedOption?.value || null,
      selectedPrice
    );
  };

  const handlePriceChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedPrice(selectedOption?.value || null);
    filterTeachers(
      selectedLanguage,
      selectedLevel,
      selectedOption?.value || null
    );
  };

  const handleLoadMore = () => {
    setTeachersToShow((prev) => prev + 4);
  };

  const handleReadMoreToggle = (teacherId: string) => {
    setExpandedTeachers((prev) => ({
      ...prev,
      [teacherId]: !prev[teacherId],
    }));
  };
  const handleBookTrialLesson = (teacherInfo: {
    avatar_url: string;
    name: string;
  }) => {
    setSelectedTeacherInfo(teacherInfo);
    setIsTrialLessonModalOpen(true);
  };

  return (
    <section className={css.section}>
      <div className={css.filter}>
        <DropdownList
          options={languageOptions}
          label="Language"
          onChange={handleLanguageChange}
        />
        <DropdownList
          options={levelOptions}
          label="Level of knowledge"
          onChange={handleLevelChange}
        />
        <DropdownList
          options={priceOptions}
          label="Price"
          onChange={handlePriceChange}
        />
      </div>
      <ul>
        {displayedTeachers.map((teacher: Teacher, index: number) => (
          <li key={index} className={css.card}>
            <div>
              <img
                src={teacher.avatar_url}
                className={css.avatar}
                alt="Teacher Avatar"
              />
            </div>
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
                <span className={css.leng}>
                  {" "}
                  {teacher.languages.join(", ")}
                </span>
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

                <div>
                  {expandedTeachers[teacher.name + teacher.surname] ? (
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
                            handleBookTrialLesson({
                              avatar_url: teacher.avatar_url,
                              name: `${teacher.name} ${teacher.surname}`,
                            })
                          }
                        >
                          <span className={css.btn_book_text}>
                            Book trial lesson
                          </span>
                        </button>
                      </ul>
                      <button
                        className={css.btn_read}
                        onClick={() =>
                          handleReadMoreToggle(teacher.name + teacher.surname)
                        }
                      >
                        Read Less
                      </button>
                    </>
                  ) : (
                    <button
                      className={css.btn_read}
                      onClick={() =>
                        handleReadMoreToggle(teacher.name + teacher.surname)
                      }
                    >
                      Read More
                    </button>
                  )}
                </div>
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
        ))}
      </ul>
      <div className={css.btn}>
        {teachers.length > displayedTeachers.length && (
          <button className={css.btn_load} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
      <BookTrial
        isOpen={isTrialLessonModalOpen}
        onClose={() => setIsTrialLessonModalOpen(false)}
        teacherInfo={selectedTeacherInfo || { avatar_url: "", name: "" }}
      />
    </section>
  );
};

export default Teachers;
