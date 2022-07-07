const initialSate = {
  UserData: [],
};

export const addTodo = (state = initialSate, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        UserData: [...state.UserData, action.payload],
      };

    case "DELETE_DATA":
      const newData = state.UserData.filter((elem, k) => k !== action.payload);

      return {
        ...state,
        UserData: newData,
      };

    case "UPDATE_DATA":
      const update = state.UserData.map((elem, k) =>
        k == action.d ? action.payload : elem
      );
      return {
        ...state,
        UserData: update,
      };

    default:
      return state;
  }
};
