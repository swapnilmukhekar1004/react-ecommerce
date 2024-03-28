export const Add = (item) => {
  return {
    type: "ADD_CARD",
    payload: item,
  };
};


export const Remove = (id) => {

   
    return {
      type: "REMOVE_CARD",
      payload: id,
    };
  };
  