import css from "./FilterDropdown.module.css";
import DropdownList from "../filter/DropdownList";

interface FilterDropdownsProps {
  languageOptions: { value: string; label: string }[];
  levelOptions: { value: string; label: string }[];
  priceOptions: { value: string; label: string }[];
  onLanguageChange: (
    selectedOption: { value: string; label: string } | null
  ) => void;
  onLevelChange: (
    selectedOption: { value: string; label: string } | null
  ) => void;
  onPriceChange: (
    selectedOption: { value: string; label: string } | null
  ) => void;
}

const FilterDropdowns: React.FC<FilterDropdownsProps> = ({
  languageOptions,
  levelOptions,
  priceOptions,
  onLanguageChange,
  onLevelChange,
  onPriceChange,
}) => {
  return (
    <div className={css.filter}>
      <DropdownList
        options={languageOptions}
        label="Language"
        onChange={onLanguageChange}
      />
      <DropdownList
        options={levelOptions}
        label="Level of knowledge"
        onChange={onLevelChange}
      />
      <DropdownList
        options={priceOptions}
        label="Price"
        onChange={onPriceChange}
      />
    </div>
  );
};

export default FilterDropdowns;
