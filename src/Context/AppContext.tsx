import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  useReducer
} from 'react';
import { ACTIONS } from '../helpers/enums';
import { Article } from '../types';

type Action =
  | {type: ACTIONS.SET_NEWS; payload: Article[]}
  | {type: ACTIONS.ADD_NEWS; payload: Article}
  | { type: ACTIONS.DELETE_NEWS; payload: Article };
  
interface Data {
  news: Article[];
}

function reducer(state: Data, action: Action): Data {
  switch (action.type) {
    case ACTIONS.SET_NEWS:
      return {...state, news: action.payload};
    case ACTIONS.ADD_NEWS:
      return {...state, news: [...state.news, action.payload]};
    case ACTIONS.DELETE_NEWS:
      return {
        ...state,
        news: state.news.filter((article) => article !== action.payload),
      };
    default:
      return state;
  }
}

interface State {
  state: Data;
  dispatch: Dispatch<Action>;
}

const initialState: State = {
  state: {news: []},
  dispatch: () => {}
}

export const AppContext = createContext<State | undefined>(initialState);

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => { 
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return (
    <AppContext.Provider value= {{
      
  }
}>
      {children}
    </AppContext.Provider>
  )
}


