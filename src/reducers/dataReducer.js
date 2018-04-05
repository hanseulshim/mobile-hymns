import { DATA_AVAILABLE, SELECTED_HYMN } from '../constants/';

const dataState = { data: [], selectedHymn: {}, loading: true };

export default (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return Object.assign({}, state, { data: action.data, loading: false });
    case SELECTED_HYMN:
      return Object.assign({}, state, { selectedHymn: action.data });
    default:
      return state;
  }
};
