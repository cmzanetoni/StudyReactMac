import { createContext, useReducer } from 'react';
import {useTitleColorContext} from "../hooks/useTitleColorContext.jsx";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  //switch
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log("Title color context: ", state);

  return (
    <TitleColorContext.Provider value={ {...state} }>
      {children}
    </TitleColorContext.Provider>
  )
}