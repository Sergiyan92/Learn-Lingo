import React, { useState } from "react";
// import { useFirebase } from "../context/FirebaseContext";
import css from "./Teachers.module.css";
import DropdownList from "../filter/DropdownList";

const Teachers: React.FC = () => {
  //   const firebase = useFirebase();
  //   const [teachers, setTeachers] = useState([]);
  const [, setSelectedLanguage] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [, setSelectedLevel] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [, setSelectedPrice] = useState<{
    value: string;
    label: string;
  } | null>(null);

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    // Додайте інші мови за потребою
  ];

  const levelOptions = [
    { value: "a1beginner", label: "A1 Beginner" },
    { value: "a2elementary", label: "A2 Elementary" },
    { value: "b1intermediate", label: "B1 Intermediate" },
    { value: "b2upper-intermediate", label: "B2 Upper-Intermediate" },
  ];

  const priceOptions = [
    { value: "28$", label: "28$" },
    { value: "30$", label: "30$" },
    { value: "35$", label: "35$" },
  ];

  //   useEffect(() => {
  //     const fetchTeachers = async () => {
  //       try {
  //         const snapshot = await firebase
  //           .database()
  //           .ref("teachers")
  //           .once("value");
  //         const teachersData = snapshot.val();
  //         if (teachersData) {
  //           setTeachers(Object.values(teachersData));
  //         }
  //       } catch (error) {
  //         console.error("Error fetching teachers", error);
  //       }
  //     };

  //     fetchTeachers();
  //   }, [firebase]);

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

  return (
    <section>
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
    </section>
  );
};

export default Teachers;
