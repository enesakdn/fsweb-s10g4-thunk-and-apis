import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";

const initial = {
  favs: [],
  current: null,
  error: null,
  loading: false,
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FETCH_LOADING:
      return { ...state, loading: true, current: null };

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FAV_ADD:
      const newAdd = {
        ...state,
        favs: [...state.favs, state.current],
      };

      writeFavsToLocalStorage(newAdd);
      return newAdd;

    case FAV_REMOVE:
      const newRemove = state.favs.filter((item) => item.id !== action.payload);
      const newState = { ...state, favs: newRemove };
      writeFavsToLocalStorage(newState);
      return newState;

    case FETCH_SUCCESS:
      return { ...state, current: action.payload, loading: !state.loading };

    case GET_FAVS_FROM_LS:
      const hafıza = readFavsFromLocalStorage();
      return { ...state, favs: hafıza };

    default:
      return state;
  }
}
