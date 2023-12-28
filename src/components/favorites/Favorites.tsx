// FavoritesPage.tsx
import React, { useState, useEffect } from "react";
import TeacherCard from "../card/TeacherCard";

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
interface FavoritesPageProps {
  onRemoveFromFavorites: (teacher: Teacher) => void;
}

const Favorites: React.FC<FavoritesPageProps> = ({ onRemoveFromFavorites }) => {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  // Завантаження обраних вчителів при монтажі компонента
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Збереження обраних вчителів при їх зміні
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((teacher, index) => (
          <TeacherCard
            key={index}
            teacher={teacher}
            expanded={false}
            onReadMoreToggle={() => {}}
            onBookTrialLesson={() => {}}
            onRemoveFromFavorites={onRemoveFromFavorites}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
