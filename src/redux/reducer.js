const INIT_STATE = {
  cards: [],
};

export const cardreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };

      case "REMOVE_CARD":
        const data = state.cards.filter((e) => e.id !== action.payload)
        return {
          ...state,
          cards: data
        };

    default:
      return state;
  }
};
