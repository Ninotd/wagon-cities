
import {} from '../actions/index';


export default function (state, action) {

  if (state === undefined)
    return [];

  if (action.type === '') {
    return action.payload;
  }
  else {
    return state;
  }
}
