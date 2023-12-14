import React, { useEffect, useState } from "react";

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

  return (
    <section>
      <h2>Teachers</h2>
      <ul>
        {teachers.map((teacher: Teacher, index: number) => (
          <li key={index}>
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
            <div>
              Avatar URL: <img src={teacher.avatar_url} alt="Teacher Avatar" />
            </div>
            <div>Lesson Info: {teacher.lesson_info}</div>
            <div>Conditions: {teacher.conditions.join(", ")}</div>
            <div>Experience: {teacher.experience}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Teachers;
