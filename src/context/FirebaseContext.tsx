// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";

// interface Review {
//   reviewer_name: string;
//   reviewer_rating: number;
//   comment: string;
// }

// interface Teacher {
//   name: string;
//   surname: string;
//   languages: string[];
//   levels: string[];
//   rating: number;
//   reviews: Review[];
//   price_per_hour: number;
//   lessons_done: number;
//   avatar_url: string;
//   lesson_info: string;
//   conditions: string[];
//   experience: string;
// }

// interface FirebaseContextType {
//   data: { teachers: Teacher[] } | null;
//   loading: boolean;
// }

// interface FirebaseProviderProps {
//   value: any;
//   children: ReactNode;
// }

// const FirebaseContext = createContext<FirebaseContextType | null>(null);

// export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({
//   value,
//   children,
// }) => {
//   const [data, setData] = useState<{ teachers: Teacher[] } | null>(value);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (value) {
//       setData(value);
//       setLoading(false);
//     }
//   }, [value]);

//   return (
//     <FirebaseContext.Provider value={{ data, loading }}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

// export const useFirebase = () => {
//   const context = useContext(FirebaseContext);
//   if (!context) {
//     throw new Error("useFirebase must be used within a FirebaseProvider");
//   }
//   return context;
// };
