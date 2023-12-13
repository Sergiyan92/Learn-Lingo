import Select from "react-select";
import css from "./DropdownList.module.css";
interface DropdownListProps {
  options: { value: string; label: string }[];
  label: string;
  onChange: (selectedOption: { value: string; label: string } | null) => void;
}

const DropdownList: React.FC<DropdownListProps> = ({
  options,
  label,
  onChange,
}) => {
  return (
    <div className={css.dropdown}>
      <label className={css.lable}>{label}</label>
      <Select options={options} onChange={onChange} className={css.option} />
    </div>
  );
};

export default DropdownList;
