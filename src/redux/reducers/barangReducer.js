const initialState = {
    loading: false,
    error: null,
    barang: [],
  };
  
  const barangReducers = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_BARANG_SUCCESS":
        return { ...state, loading: false, barang: action.payload };
      case "FETCH_BARANG_FAILURE":
        return { ...state, loading: false, error: action.payload };
      case "ADD_BARANG_SUCCESS":
        return { ...state, barang: [...state.barang, action.payload] };
      case "ADD_BARANG_FAILURE":
        return { ...state, error: action.payload };
      case "EDIT_BARANG_SUCCESS":
        return {
          ...state,
          barang: state.barang.map((barang) =>
            barang.id === action.payload.id ? action.payload : barang
          ),
        };
      case "EDIT_BARANG_FAILURE":
        return { ...state, error: action.payload };
      case "DELETE_BARANG_SUCCESS":
        return {
          ...state,
          barang: state.barang.filter((barang) => barang.id !== action.payload),
        };
      case "DELETE_BARANG_FAILURE":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default barangReducers;
  