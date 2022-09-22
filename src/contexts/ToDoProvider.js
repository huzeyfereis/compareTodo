import { createContext, useReducer } from 'react';

export const ToDoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_TODO': {
      if (action.payload === '') return state;
      return {
        ...state,
        toDoItems: [action.payload, ...state.toDoItems],
      };
    }
    case 'SOLVE_TODO': {
      return {
        ...state,
        toDoItems: state.toDoItems.map((item) => {
          if (item.id === action.payload) {
            item.isSolved = true;
          }
          return item;
        }),
      };
    }
    default:
      break;
  }
};

const initialState = { toDoItems: [] };

export const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};
