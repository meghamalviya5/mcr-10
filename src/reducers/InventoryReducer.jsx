export const inventoryReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value,
        },
      };

    case "ADD_NEW_PRODUCT":
      return {
        ...state,
        inventoryData: action.payload,
      };

    case "UPDATE_FORM_DATA":
      return {
        ...state,
        newProduct: {
          ...state.newProduct,
          [action.payload.key]: action.payload.value,
        },
      };

    case "CLEAR_DATA":
      return { ...state, newProduct: action.payload };

    default:
      return { state };
  }
};
