import React, { useEffect, useState } from "react";
import css from "./Teachers.module.css";
import DropdownList from "../filter/DropdownList";

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
  const [selectedLanguage, setSelectedLanguage] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<{
    value: string;
    label: string;
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
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    // Додайте інші мови за потребою
  ];

  const levelOptions = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const priceOptions = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];
  const handleLanguageChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedLanguage(selectedOption);
    // Додайте логіку для фільтрації викладачів за мовою
  };

  const handleLevelChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedLevel(selectedOption);
    // Додайте логіку для фільтрації викладачів за рівнем знань
  };

  const handlePriceChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setSelectedPrice(selectedOption);
    // Додайте логіку для фільтрації викладачів за ціною
  };
  const handleLoadMore = () => {
    setTeachersToShow((prev) => prev + 4);
  };
  return (
    <section>
      <h2>Teachers</h2>
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
          <li key={index}>
            <div>
              <img
                src={teacher.avatar_url}
                className={css.avatar}
                alt="Teacher Avatar"
              />
            </div>
            <div>
              {teacher.name} {teacher.surname}
            </div>
            <div>Languages: {teacher.languages.join(", ")}</div>
            <div>Levels: {teacher.levels.join(", ")}</div>
            <div>Rating: {teacher.rating}</div>
            <div>
              Reviews:
              <ul>
                {teacher.reviews.map((review, reviewIndex) => (
                  <li key={reviewIndex}>
                    <div>
                      {review.reviewer_name} ({review.reviewer_rating}):{" "}
                      {review.comment}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>Price per hour: {teacher.price_per_hour}</div>
            <div>Lessons done: {teacher.lessons_done}</div>
            <div>Lesson Info: {teacher.lesson_info}</div>
            <div>Conditions: {teacher.conditions.join(", ")}</div>
            <div>Experience: {teacher.experience}</div>
          </li>
        ))}
      </ul>
      {teachers.length > displayedTeachers.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </section>
  );
};

export default Teachers;
