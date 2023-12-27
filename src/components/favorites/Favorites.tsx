import css from "./Favorites.module.css";
// FavoritesPage.tsx
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
  favorites: Teacher[];
  onRemoveFromFavorites: (teacher: Teacher) => void;
}

const Favorites: React.FC<FavoritesPageProps> = ({
  favorites,
  onRemoveFromFavorites,
}) => {
  return (
    <div className={css.fav}>
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
