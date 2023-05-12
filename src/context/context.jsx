import { createContext, useEffect, useState } from "react";

import { fetchData } from "../utils/FetchApi";
export const MyContext = createContext();

export const AppProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [selectCategory, setSelectCategory] = useState("Recomended");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchCategory(selectCategory);
  }, [selectCategory]);
  const fetchCategory = (item) => {
    setLoading(true);
    fetchData(`search/?q=${item}`).then(({ contents }) => {
      console.log(contents);
      setSearchResult(contents);
      setLoading(false);
    });
  };
  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        selectCategory,
        setSelectCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
