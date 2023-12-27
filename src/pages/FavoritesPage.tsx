import { useState } from "react";
import Favorites from "../components/favorites/Favorites";
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
const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Teacher[]>([]); // Замініть це на ваш стан з обраними вчителями

  const removeFromFavorites = (teacherToRemove: Teacher) => {
    // Логіка видалення з обраних
    const updatedFavorites = favorites.filter(
      (teacher) => teacher.name !== teacherToRemove.name
    );
    setFavorites(updatedFavorites);
  };

  return (
    <Favorites
      favorites={favorites}
      onRemoveFromFavorites={removeFromFavorites}
    />
  );
};

export default FavoritesPage;
